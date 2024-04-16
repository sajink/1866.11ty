document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        burger.forEach(function(element) {
            element.addEventListener('click', function() {
                menu.forEach(function(menuElement) {
                    menuElement.classList.toggle('hidden');
                });
                burger.forEach(function(burgerElement) {
                    burgerElement.classList.toggle('hidden');
                });
            });
        });
    }

    const close = document.querySelectorAll('.navbar-close');

    function closeMenu() {
        menu.forEach(function(menuElement) {
            menuElement.classList.add('hidden');
        });
        burger.forEach(function(burgerElement) {
            burgerElement.classList.remove('hidden');
        });
    }

    if (close.length) {
        close.forEach(function(element) {
            element.addEventListener('click', closeMenu);
        });
    }
});
const enableSwiper = function (){   
    new Swiper("#sSwiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
};
document.addEventListener("DOMContentLoaded", function () {
    enableSwiper();
});