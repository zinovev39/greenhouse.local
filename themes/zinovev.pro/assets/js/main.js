
const swiperBanner = new Swiper(".swiper-banner", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 5000,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});