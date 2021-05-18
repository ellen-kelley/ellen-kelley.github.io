import "../scss/about.scss";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

// Section - Testimonials Slider //

new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
