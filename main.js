document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        burger.forEach(function (element) {
            element.addEventListener('click', function () {
                menu.forEach(function (menuElement) {
                    menuElement.classList.toggle('hidden');
                });
                burger.forEach(function (burgerElement) {
                    burgerElement.classList.toggle('hidden');
                });
            });
        });
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    function closeMenu() {
        menu.forEach(function (menuElement) {
            menuElement.classList.add('hidden');
        });
        burger.forEach(function (burgerElement) {
            burgerElement.classList.remove('hidden');
        });
    }

    if (close.length) {
        close.forEach(function (element) {
            element.addEventListener('click', closeMenu);
        });
    }

    if (backdrop.length) {
        backdrop.forEach(function (element) {
            element.addEventListener('click', closeMenu);
        });
    }
});
//modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
function showModal(src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
}
function closeModal() {
    modal.classList.add('hidden');
}

//slideshow
var images = ['/images/home-slide/H1.jpeg', '/images/home-slide/H21.jpeg', '/images/home-slide/H3.jpeg', '/images/home-slide/H4.jpeg', '/images/home-slide/H5.jpeg', '/images/home-slide/H6.jpeg', '/images/home-slide/H7.jpeg', '/images/home-slide/H8.jpeg', '/images/home-slide/H9.jpeg', '/images/home-slide/H10.jpeg'];
var currentIndex = 0;
var slideshowText = document.getElementById('slideshowText');
var slideshowContainer = document.querySelector('.slideshow');
var dotContainer = document.getElementById('dotContainer');

function startSlideshow() {
    setInterval(changeSlide, 6000);
    updateDots();
}

function changeSlide(index) {
    if (typeof index === 'undefined') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = index;
    }
    slideshowContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
    updateDots();
}

function updateDots() {
    dotContainer.innerHTML = '';
    for (var i = 0; i < images.length; i++) {
        var dot = document.createElement('div');
        dot.className = 'w-3 h-3 rounded-full bg-gray-500 cursor-pointer';
        dot.setAttribute('data-index', i);
        if (i === currentIndex) {
            dot.classList.add('bg-white');
        }
        dot.addEventListener('click', function () {
            var newIndex = parseInt(this.getAttribute('data-index'));
            if (newIndex !== currentIndex) {
                currentIndex = newIndex - 1;
                slideshowContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
                updateDots();
            }
        });
        dotContainer.appendChild(dot);
    }
}
startSlideshow();