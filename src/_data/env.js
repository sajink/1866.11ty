const devUrl = 'http://localhost:8080';
const prodUrl = 'https://rajpalace.in';
const isProd = process.env.SLOT !== 'dev';
const url = isProd ? prodUrl : devUrl;

module.exports = {
    isProd,
    url,
    tracking: {
        gtag: 'UA-7511601-30',
        pixelId: '505873629553728',
    },
};