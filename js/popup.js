$(".popupTrig").magnificPopup({
    type: "image",
    preloader: false,
    closeOnContentClick: true,
    fixedContentPos: true,
    overflowY: "hidden",
    image: {
        verticalFit: false,
        hasOrientation: true
    },
    mainClass: "mfp-with-zoom",
    zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
    },
    gallery: {
        enabled: true
    },
})