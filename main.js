document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        burger.forEach(function(element) {
            element.addEventListener('click', function() {
                menu.forEach(function(menuElement) {
                    menuElement.classList.toggle('hidden');
                });

                // Toggle visibility of hamburger icon
                burger.forEach(function(burgerElement) {
                    burgerElement.classList.toggle('hidden');
                });
            });
        });
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    function closeMenu() {
        menu.forEach(function(menuElement) {
            menuElement.classList.add('hidden');
        });

        // Show the hamburger icon when the menu is closed
        burger.forEach(function(burgerElement) {
            burgerElement.classList.remove('hidden');
        });
    }

    if (close.length) {
        close.forEach(function(element) {
            element.addEventListener('click', closeMenu);
        });
    }

    if (backdrop.length) {
        backdrop.forEach(function(element) {
            element.addEventListener('click', closeMenu);
        });
    }
});
