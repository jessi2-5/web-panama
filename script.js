var swiper = new Swiper(".mySwiper", { // Faltaba el punto en el selector de clase
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev' // Corregido el typo
    },

    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});
