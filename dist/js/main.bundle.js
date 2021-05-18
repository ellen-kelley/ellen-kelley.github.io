/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkellen_kelley_github_io"] = self["webpackChunkellen_kelley_github_io"] || []).push([["main"],{

/***/ "./src/assets/scss/general.scss":
/*!**************************************!*\
  !*** ./src/assets/scss/general.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/scss/general.scss?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var boxicons_css_boxicons_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! boxicons/css/boxicons.min.css */ \"./node_modules/boxicons/css/boxicons.min.css\");\n/* harmony import */ var _scss_general_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/general.scss */ \"./src/assets/scss/general.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(() => {\r\n  \"use strict\";\r\n  /**\r\n   * Easy selector helper function\r\n   */\r\n  const select = (el, all = false) => {\r\n    el = el.trim();\r\n    if (all) {\r\n      return [...document.querySelectorAll(el)];\r\n    } else {\r\n      return document.querySelector(el);\r\n    }\r\n  };\r\n\r\n  /**\r\n   * Easy event listener function\r\n   */\r\n  const on = (type, el, listener, all = false) => {\r\n    let selectEl = select(el, all);\r\n    if (selectEl) {\r\n      if (all) {\r\n        selectEl.forEach((e) => e.addEventListener(type, listener));\r\n      } else {\r\n        selectEl.addEventListener(type, listener);\r\n      }\r\n    }\r\n  };\r\n\r\n  /**\r\n   * Easy on scroll event listener\r\n   */\r\n  const onscroll = (el, listener) => {\r\n    el.addEventListener(\"scroll\", listener);\r\n  };\r\n\r\n  /**\r\n   * Scrolls to an element with header offset\r\n   */\r\n  const scrollto = (el) => {\r\n    let header = select(\"#header\");\r\n    let offset = header.offsetHeight;\r\n\r\n    if (!header.classList.contains(\"header-scrolled\")) {\r\n      offset -= 16;\r\n    }\r\n\r\n    let elementPos = select(el).offsetTop;\r\n    window.scrollTo({\r\n      top: elementPos - offset,\r\n      behavior: \"smooth\",\r\n    });\r\n  };\r\n\r\n  /**\r\n   * Toggle .header-scrolled class to #header when page is scrolled\r\n   */\r\n  let selectHeader = select(\"#header\");\r\n  let logo = select(\".logo\");\r\n\r\n  if (selectHeader && selectHeader.classList.contains(\"main-header\")) {\r\n    const headerScrolled = () => {\r\n      if (window.scrollY > 100) {\r\n        selectHeader.classList.add(\"header-scrolled\");\r\n        logo.classList.add(\"logo-small\");\r\n        select(\".logo-img\").src = \"assets/img/logo-dark.png\";\r\n      } else {\r\n        selectHeader.classList.remove(\"header-scrolled\");\r\n        logo.classList.remove(\"logo-small\");\r\n        select(\".logo-img\").src = \"assets/img/logo.png\";\r\n      }\r\n    };\r\n    window.addEventListener(\"load\", headerScrolled);\r\n    onscroll(document, headerScrolled);\r\n  }\r\n\r\n  /**\r\n   * Back to top button\r\n   */\r\n  let backtotop = select(\".back-to-top\");\r\n  if (backtotop) {\r\n    const toggleBacktotop = () => {\r\n      if (window.scrollY > 100) {\r\n        backtotop.classList.add(\"active\");\r\n      } else {\r\n        backtotop.classList.remove(\"active\");\r\n      }\r\n    };\r\n    window.addEventListener(\"load\", toggleBacktotop);\r\n    onscroll(document, toggleBacktotop);\r\n  }\r\n\r\n  /**\r\n   * Mobile nav toggle\r\n   */\r\n  on(\"click\", \".mobile-nav-toggle\", (e) => {\r\n    select(\"#navbar\").classList.toggle(\"navbar-mobile\");\r\n    e.currentTarget.classList.toggle(\"bi-list\");\r\n    e.currentTarget.classList.toggle(\"bi-x\");\r\n  });\r\n\r\n  /**\r\n   * Mobile nav dropdowns activate\r\n   */\r\n  on(\r\n    \"click\",\r\n    \".navbar .dropdown > a\",\r\n    (e) => {\r\n      if (select(\"#navbar\").classList.contains(\"navbar-mobile\")) {\r\n        e.preventDefault();\r\n        e.currentTarget.nextElementSibling.classList.toggle(\"dropdown-active\");\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  /**\r\n   * Scroll with offset on links with a class name .scrollto\r\n   */\r\n  on(\r\n    \"click\",\r\n    \".scrollto\",\r\n    function (e) {\r\n      if (select(this.hash)) {\r\n        e.preventDefault();\r\n\r\n        let navbar = select(\"#navbar\");\r\n        if (navbar.classList.contains(\"navbar-mobile\")) {\r\n          navbar.classList.remove(\"navbar-mobile\");\r\n          let navbarToggle = select(\".mobile-nav-toggle\");\r\n          navbarToggle.classList.toggle(\"bi-list\");\r\n          navbarToggle.classList.toggle(\"bi-x\");\r\n        }\r\n        scrollto(this.hash);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  /**\r\n   * Scroll with offset on page load with hash links in the url\r\n   */\r\n  window.addEventListener(\"load\", () => {\r\n    if (window.location.hash) {\r\n      if (select(window.location.hash)) {\r\n        scrollto(window.location.hash);\r\n      }\r\n    }\r\n  });\r\n\r\n  /**\r\n   * Preloader\r\n   */\r\n  let preloader = select(\"#preloader\");\r\n  if (preloader && !window.location.pathname.includes(\"portfolio\")) {\r\n    window.addEventListener(\"load\", () => {\r\n      preloader.remove();\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Animation on scroll\r\n   */\r\n  window.addEventListener(\"load\", () => {\r\n    aos__WEBPACK_IMPORTED_MODULE_0___default().init({\r\n      duration: 1000,\r\n      easing: \"ease-in-out\",\r\n      once: true,\r\n      mirror: false,\r\n    });\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/js/main.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/assets/js/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);