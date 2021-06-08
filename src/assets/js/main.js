import "../scss/general.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/swiper-bundle.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";

(() => {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  let logo = select(".logo");

  if (selectHeader && selectHeader.classList.contains("main-header")) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        logo.classList.add("logo-small");
        select(".logo-img").src = "assets/img/logo-dark.png";
      } else {
        selectHeader.classList.remove("header-scrolled");
        logo.classList.remove("logo-small");
        select(".logo-img").src = "assets/img/logo.png";
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", (e) => {
    select("#navbar").classList.toggle("navbar-mobile");
    e.currentTarget.classList.toggle("bi-list");
    e.currentTarget.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    (e) => {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  // on(
  //   "click",
  //   ".scrollto",
  //   function (e) {
  //     if (select(this.hash)) {
  //       e.preventDefault();

  //       let navbar = select("#navbar");
  //       if (navbar.classList.contains("navbar-mobile")) {
  //         navbar.classList.remove("navbar-mobile");
  //         let navbarToggle = select(".mobile-nav-toggle");
  //         navbarToggle.classList.toggle("bi-list");
  //         navbarToggle.classList.toggle("bi-x");
  //       }
  //       scrollto(this.hash);
  //     }
  //   },
  //   true
  // );

  /**
   * Scroll with offset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader && !window.location.pathname.includes("portfolio")) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
