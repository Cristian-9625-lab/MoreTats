
// Initialize AOS for scroll animations
AOS.init();

// Initialize Swiper slider
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
