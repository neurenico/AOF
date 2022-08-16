const swiper1 = document.querySelector(".swiper-first"), swiper2 = document.querySelector(".swiper-second");
let swiper = new Swiper(swiper1, {
    // Optional parameters
    loop: true,
    slideClass: "swiper-slide",
    wrapperClass: "swiper-wrapper",
    slidesPerView: 3,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
});

//# sourceMappingURL=index.022ea949.js.map
