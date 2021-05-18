/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkellen_kelley_github_io"] = self["webpackChunkellen_kelley_github_io"] || []).push([["index"],{

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/scss/style.scss?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/assets/scss/style.scss\");\n/* harmony import */ var _srexi_purecounterjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @srexi/purecounterjs */ \"./node_modules/@srexi/purecounterjs/dist/purecounter.js\");\n/* harmony import */ var _srexi_purecounterjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_srexi_purecounterjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/bundle */ \"./node_modules/swiper/swiper-bundle.esm.js\");\n/* harmony import */ var swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! glightbox */ \"./node_modules/glightbox/dist/js/glightbox.min.js\");\n/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var glightbox_dist_css_glightbox_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! glightbox/dist/css/glightbox.min.css */ \"./node_modules/glightbox/dist/css/glightbox.min.css\");\n\n\n\n\n\n\n\n\n\n\n\n\n// Section - Hero Cube Swiper //\n\nnew swiper_bundle__WEBPACK_IMPORTED_MODULE_2__.default(\".hero-swiper\", {\n  effect: \"cube\",\n  grabCursor: true,\n  loop: true,\n  speed: 700,\n  preventInteractionOnTransition: true,\n  initialSlide: 2,\n  loopAdditionalSlides: 1,\n  cubeEffect: {\n    shadow: true,\n    slideShadows: true,\n    shadowOffset: 25,\n    shadowScale: 0.85,\n  },\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: false,\n    dynamicBullets: true,\n  },\n  autoplay: {\n    delay: 3000,\n    disableOnInteraction: false,\n  },\n});\n\n// Subsection  - Porfolio isotope //\n\nwindow.addEventListener(\"load\", () => {\n  let portfolioContainer = document.querySelector(\".portfolio-container\");\n  if (portfolioContainer) {\n    let portfolioIsotope = new (isotope_layout__WEBPACK_IMPORTED_MODULE_4___default())(portfolioContainer, {\n      itemSelector: \".portfolio-item\",\n    });\n  }\n  const portfolioLightbox = glightbox__WEBPACK_IMPORTED_MODULE_5___default()({\n    selector: \".portfolio-lightbox\",\n  });\n});\n\n// Subsection  - Initiate portfolio lightbox //\n\nconst portfolioLightbox = glightbox__WEBPACK_IMPORTED_MODULE_5___default()({\n  selector: \".portfolio-lightbox\",\n});\n\n// Section - Testimonials Slider //\n\nnew swiper_bundle__WEBPACK_IMPORTED_MODULE_2__.default(\".testimonials-slider\", {\n  speed: 600,\n  loop: true,\n  autoplay: {\n    delay: 4000,\n    disableOnInteraction: false,\n  },\n  slidesPerView: \"auto\",\n  pagination: {\n    el: \".swiper-pagination\",\n    type: \"bullets\",\n    clickable: true,\n  },\n  breakpoints: {\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 40,\n    },\n\n    1200: {\n      slidesPerView: 3,\n      spaceBetween: 40,\n    },\n  },\n});\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/js/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/assets/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);