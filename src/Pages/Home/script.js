
import Swiper from './swiper.min.mjs';

var swiper = new Swiper(".slide-content", {

    slidesPerView: 3,
    spaceBetween: 20,
    centerSlide: 'true',
    loop: true,
    grapCuror: true,
    fade: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }


});