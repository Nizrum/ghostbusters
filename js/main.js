const mMenuBtn = document.querySelector('.m-menu-button');
const mMenu = document.querySelector('.m-menu');
const body = document.querySelector('body');
const menuLine = document.querySelectorAll('.menu-line');
const tab = document.querySelectorAll('.tab');
const tabsContent = document.querySelectorAll('.tabs-content');

mMenuBtn.addEventListener('click', function () {
    mMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
    mMenuBtn.classList.toggle('active');
});

var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
            navigation: {
                nextEl: '.button-next',
            },
        }
    },
});

tab.forEach(item => {
    item.addEventListener('click', function () {
        tab.forEach(item => item.classList.remove('active'));
        this.classList.toggle('active');
        const target = document.querySelector(this.dataset.target);
        tabsContent.forEach(item => item.classList.remove('visible'));
        target.classList.toggle('visible');
    });
});