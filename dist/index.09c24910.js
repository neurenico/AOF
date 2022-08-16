const swiperFirst = document.querySelector(".swiper-first"), swiperSecond = document.querySelector(".swiper-second"), swiperThird = document.querySelector(".swiper-third"), swiperFourth = document.querySelector(".swiper-fourth");
let sliderFirst = new Swiper(swiperFirst, {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 5000
    },
    speed: 500,
    slideClass: "swiper-slide-first",
    wrapperClass: "swiper-wrapper-first",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
let sliderSecond = new Swiper(swiperSecond, {
    slidesPerView: 4,
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 5000
    },
    speed: 500,
    slideClass: "swiper-slide-second",
    wrapperClass: "swiper-wrapper-second",
    navigation: {
        nextEl: ".swiper-button-next-second",
        prevEl: ".swiper-button-prev-second"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }
    }
});
let sliderThird = new Swiper(swiperThird, {
    slidesPerView: 2.5,
    direction: "horizontal",
    loop: true,
    speed: 500,
    slideClass: "swiper-slide-third",
    wrapperClass: "swiper-wrapper-third",
    navigation: {
        nextEl: ".swiper-button-next-third",
        prevEl: ".swiper-button-prev-third"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        540: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2,
            centeredSlides: true
        },
        1040: {
            slidesPerView: 2.5,
            centeredSlides: false
        }
    }
});
let sliderFourth = new Swiper(swiperFourth, {
    slidesPerView: 6,
    direction: "horizontal",
    loop: true,
    speed: 500,
    slideClass: "swiper-slide-fourth",
    wrapperClass: "swiper-wrapper-fourth",
    navigation: {
        nextEl: ".swiper-button-next-fourth",
        prevEl: ".swiper-button-prev-fourth"
    },
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        540: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1024: {
            slidesPerView: 6
        }
    }
});

//# sourceMappingURL=index.09c24910.js.map
