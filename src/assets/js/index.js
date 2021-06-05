import "../scss/style.scss";

import PureCounter from "@srexi/purecounterjs";

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

let portfolioContainer = document.querySelector(".portfolio-container");
const portfolioImages = [
  "happy-neon.jpeg",
  "am-tech.jpeg",
  "hotel-goris.jpeg",
  "crystal-front.jpeg",
  "pricetime.jpeg",
  "traffic.jpeg",
  "jalyuzi-2.jpeg",
  "illustion-side.jpeg",
  "gml.jpeg",
];

portfolioImages.forEach((item) => {
  portfolioContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 portfolio-item">
      <div class="portfolio-wrap">
          <img src=${"assets/img/index/" + item} class="img-fluid" alt="">
          <div class="portfolio-links">
              <a href=${"assets/img/index/" + item} data-gallery="portfolioGallery"
                  class="portfolio-lightbox"><i class="bi bi-zoom-in"></i></a>
          </div>
      </div>
    </div>`;
});

Promise.all(
  Array.from(document.images).map((img) => {
    if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
    return new Promise((resolve) => {
      img.addEventListener("load", () => resolve(true));
      img.addEventListener("error", () => resolve(false));
    });
  })
).then((results) => {
  if (results.every((res) => res)) {
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });
    }
    GLightbox({
      selector: ".portfolio-lightbox",
    });

    // Subsection  - Initiate portfolio lightbox //

    const portfolioLightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });
  }
});

// Section - Testimonials Slider //

new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5200,
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
