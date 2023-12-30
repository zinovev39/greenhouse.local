/* Сладер в баннере */
var swiperBanner = new Swiper(".swiper-banner", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  scrollbar: {
    el: ".scrollbar-banner",
  },
  autoplay: {
    delay: 5000,
  },
});

/* Сладер для номеров */
/* Standart*/
var swiperThumbsStandart = new Swiper(".standart-thumbs", {
  loop: true,
  freeMode: true,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
var swiperGalleryStandart = new Swiper(".standart-gallery",{
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  scrollbar: {
    el: ".scrollbar-standart",
  },
  navigation: {
    nextEl: ".button-next-standart",
    prevEl: ".button-prev-standart",
  },
  thumbs: {
    swiper: swiperThumbsStandart,
  },
});

/* Comfort */
var swiperThumbsComfort = new Swiper(".comfort-thumbs", {
  loop: true,
  freeMode: true,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
var swiperGalleryComfort = new Swiper(".comfort-gallery",{
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  scrollbar: {
    el: ".scrollbar-comfort",
  },
  navigation: {
    nextEl: ".button-next-comfort",
    prevEl: ".button-prev-comfort",
  },
  thumbs: {
    swiper: swiperThumbsComfort,
  },
});

/* StandartPlus */
var swiperThumbsStandartPlus = new Swiper(".standartplus-thumbs", {
  loop: true,
  freeMode: true,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
var swiperGalleryStandartPlus = new Swiper(".standartplus-gallery",{
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  scrollbar: {
    el: ".scrollbar-standartplus",
  },
  navigation: {
    nextEl: ".button-next-standartplus",
    prevEl: ".button-prev-standartplus",
  },
  thumbs: {
    swiper: swiperThumbsStandartPlus,
  },
});

var swiperInfrastructure = new Swiper(".swiper-infrastructure", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  scrollbar: {
    el: ".scrollbar-infrastructure",
  },
  autoplay: {
    delay: 5000,
  },
});