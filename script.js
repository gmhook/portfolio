const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    menuOverlay.classList.toggle('overlay-open');
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('menu-open');
    menuOverlay.classList.remove('overlay-open');
});
