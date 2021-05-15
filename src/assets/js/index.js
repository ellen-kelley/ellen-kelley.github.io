import "../scss/style.scss";

import PureCounter from '@srexi/purecounterjs';

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

import Isotope from "isotope-layout";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

// Section - Hero Cube Swiper //

new Swiper(".hero-swiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 700,
  preventInteractionOnTransition: true,
  initialSlide: 2,
  loopAdditionalSlides: 1,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 25,
    shadowScale: 0.85,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Subsection  - Porfolio isotope //

window.addEventListener("load", () => {
  let portfolioContainer = document.querySelector(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
    });
  }
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });
});

// Subsection  - Initiate portfolio lightbox //

const portfolioLightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

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
