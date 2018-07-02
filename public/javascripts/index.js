
var swiper = new Swiper('.swiper-banner', {
    // direction: 'vertical',
    loop: true,
    autoplay: true,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});