/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkellen_kelley_github_io"] = self["webpackChunkellen_kelley_github_io"] || []).push([["services"],{

/***/ "./src/assets/scss/services.scss":
/*!***************************************!*\
  !*** ./src/assets/scss/services.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/scss/services.scss?");

/***/ }),

/***/ "./src/assets/js/services.js":
/*!***********************************!*\
  !*** ./src/assets/js/services.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_services_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/services.scss */ \"./src/assets/scss/services.scss\");\n\n\n// Section - Tabs with no anchor on desktop //\n\nconst openTabs = (el) => {\n  let btnTarget = el.currentTarget;\n  let id = \"#\" + btnTarget.getAttribute(\"aria-controls\");\n\n  tabContent.forEach((el) => {\n    el.classList.remove(\"show\");\n    el.classList.remove(\"active\");\n  });\n  tabLinks.forEach((el) => {\n    if (window.innerWidth > 768) {\n      el.setAttribute(\"href\", \"#materials\");\n    }\n    el.classList.remove(\"active\");\n  });\n  document.querySelector(id).classList.add(\"show\");\n  btnTarget.classList.add(\"active\");\n};\n\nlet tabLinks = document.querySelectorAll(\".tab-link\");\nlet tabContent = document.querySelectorAll(\".tab-pane\");\n\ntabLinks.forEach((el) => {\n  el.addEventListener(\"click\", openTabs);\n});\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/js/services.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/services.js"));
/******/ }
]);