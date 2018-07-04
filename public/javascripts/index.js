
var swiper = new Swiper('.swiper-banner', {
    loop: true,
    autoplay: true,
    grabCursor: true,
    effect: 'cube',
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    speed: 2000,
    pagination: {
        el: '.swiper-pagination',
    },
});