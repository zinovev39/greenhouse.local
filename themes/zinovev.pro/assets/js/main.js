//Меню - Бургер
const container = document.querySelector(".container");
const menuMobile = document.querySelector(".mobile-menu");
const menuHeader = document.querySelector(".header-menu");

const body = document.body;

if (container && menuMobile) {
    menuMobile.addEventListener("click", (event) => {
        container.classList.toggle("active");
        body.classList.toggle("lock");
    });
    menuHeader.addEventListener("click", (event) => {
        if (event.target.classList.contains("mobile-menu")) {
            container.classList.remove("active");
        }
    });
    menuHeader.querySelectorAll(".menu-item").forEach((link) => {
        link.addEventListener("click", () => {
            container.classList.remove("active");
        });
    });
}

//Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"');

anchors.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();

        const blockID = anchor.getAttribute("href").substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
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
