//Меню - Бургер
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mobile-menu").addEventListener("click", function () {
      document.querySelector(".container").classList.toggle("active");
  });
});

document.getElementById("main-menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});

document.getElementById("mobile-menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});

document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  //Действие при клике
  document.querySelector(".container").classList.remove("active");
});

// Сладер - Баннер
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

// Сладер - Номера
// Стандарт
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
var swiperGalleryStandart = new Swiper(".standart-gallery", {
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

// Комфорт
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
var swiperGalleryComfort = new Swiper(".comfort-gallery", {
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

// Стандарт Плюс
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
var swiperGalleryStandartPlus = new Swiper(".standartplus-gallery", {
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

// Слайдер - Инфраструктура
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

// Слайдер - Фотогалерея
var swiperThumbsPhotoGallery = new Swiper(".photo-thumbs", {
    loop: true,
    freeMode: true,
    breakpoints: {
        1400: {
            slidesPerView: 3,
            spaceBetween: 20,
            direction: "vertical",
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
            direction: "vertical",
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15,
            direction: "vertical",
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            direction: "vertical",
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 15,
            direction: "horizontal",
        },
    },
});
var swiperPhotoGallery = new Swiper(".photo-gallery", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    scrollbar: {
        el: ".scrollbar-gallery",
    },
    navigation: {
        nextEl: ".button-next-gallery",
        prevEl: ".button-prev-gallery",
    },
    thumbs: {
        swiper: swiperThumbsPhotoGallery,
    },
});
