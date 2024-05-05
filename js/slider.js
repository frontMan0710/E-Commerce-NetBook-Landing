const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 3,
        }
    },
})