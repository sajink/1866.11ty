const path = require('path');
const Image = require("@11ty/eleventy-img");
const htmlmin = require("html-minifier");
const excerpt = require('eleventy-plugin-excerpt');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { isProd, environment } = require("./src/_data/env");


async function imageShortcode(src, alt, sizes = "100vw") {
  let imageSrc = `${path.dirname(this.page.inputPath)}/${src}`;
  let metadata;
  try{
    metadata = await Image(imageSrc, {
      widths: [300, 600],
      outputDir: path.dirname(this.page.outputPath)+"/img",
      urlPath: this.page.url+"/img",
      filenameFormat: function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);
        return `${name}.${format}`;
      }
    });
  } catch (e) {
    //console.warn(e);
    return '';
  }
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);  
  }

function htmlMinify(content, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
    return minified;
  }
  return content;
}

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(excerpt);
  
  // Static Copy
  eleventyConfig.addPassthroughCopy({ './src/_static/': '/' });
  eleventyConfig.addPassthroughCopy("main.js");
  
  // Short Codes
  eleventyConfig.addShortcode("line", function(dir) {return '<div class="'+(dir??'h')+'line"></div>';});
  eleventyConfig.addPairedShortcode("box", function(content, classes) {return '<div class="'+(classes??'h-32')+' flex">'+content+'</div>';});
  eleventyConfig.addAsyncShortcode("image", imageShortcode);
  
  // Minify HTML
  if(isProd) { eleventyConfig.addTransform("htmlmin", htmlMinify); }

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts'
    },
    templateFormats: ['md','njk'],
    htmlTemplateEngine: 'njk'
  };
};