const swiper = new Swiper('.swiper-banner', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
