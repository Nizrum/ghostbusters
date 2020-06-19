const mMenuBtn = document.querySelector('.m-menu-button');
const mMenu = document.querySelector('.m-menu');
const body = document.querySelector('body');
const menuLine = document.querySelectorAll('.menu-line');
mMenuBtn.addEventListener('click', function () {
    mMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    mMenuBtn.classList.toggle('active');
});