require('./bootstrap');


import Swiper from 'swiper/bundle';

// import Swiper styles
import 'swiper/swiper-bundle.css';

// init Swiper:
const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    direction: 'horizontal',
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    fadeEffect: {
        crossFade: true
    },
});
