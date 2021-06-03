/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkellen_kelley_github_io"] = self["webpackChunkellen_kelley_github_io"] || []).push([["calculator"],{

/***/ "./src/assets/scss/calculator.scss":
/*!*****************************************!*\
  !*** ./src/assets/scss/calculator.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/scss/calculator.scss?");

/***/ }),

/***/ "./src/assets/js/calculator.js":
/*!*************************************!*\
  !*** ./src/assets/js/calculator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_calculator_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/calculator.scss */ \"./src/assets/scss/calculator.scss\");\n\n\n// Section - All the data needed for calculations\n\nconst data = [\n  {\n    id: 0,\n    type: function () {\n      squareInput.classList.add(\"hidden\");\n      cmInput.classList.add(\"hidden\");\n      slider.classList.add(\"hidden\");\n      result.classList.add(\"hidden\");\n    },\n  },\n  {\n    id: 1,\n    name: \"Ծավալային տառեր\",\n    type: function () {\n      sliderType();\n    },\n    price: 400,\n  },\n  {\n    id: 2,\n    name: \"Լուսավորվող արկղ (lightbox)\",\n    type: function () {\n      squareType();\n    },\n    price: 80000,\n  },\n  {\n    id: 3,\n    name: \"Բոնդերով երեսապատում\",\n    type: function () {\n      squareType();\n    },\n    price: 25000,\n  },\n\n  {\n    id: 4,\n    name: \"Բոնդերով լուսավորվող գովազդ\",\n    type: function () {\n      squareType();\n    },\n    price: 80000,\n  },\n];\n\n// Section - Match range slider with its input\n\nlet sliderRange = document.querySelector(\"#slider\");\nlet sliderOutput = document.querySelector(\"#output\");\n\nsliderRange.oninput = function () {\n  sliderOutput.value = this.value;\n};\nsliderOutput.oninput = function () {\n  sliderRange.value = this.value;\n};\n\n// Section - Calculator functionality\n\n// Select all elements to show and hide them when necessary\nconst select = document.querySelector(\".form-select\");\nconst squareInput = document.querySelector(\".square-input-wrapper\");\nconst cmInput = document.querySelector(\".cm-input-wrapper\");\nconst slider = document.querySelector(\".slider-wrapper\");\nconst result = document.querySelector(\".result\");\n\n// Print all dropdown options .\ndata.forEach((item) => {\n  if (item.name) {\n    select.innerHTML += `<option>${item.name}</option>`;\n  }\n});\n\n// Select all the input to later use their values\nlet finalPrice = document.querySelector(\"#final-price\");\nlet squareValue = document.querySelector(\"#square-value\");\nlet cmValue = document.querySelector(\"#cm-value\");\nlet productPrice, price;\n\n// Toggle classes to display appropriate elements\nconst squareType = () => {\n  result.classList.add(\"hidden\");\n  slider.classList.add(\"hidden\");\n  cmInput.classList.add(\"hidden\");\n  squareInput.classList.remove(\"hidden\");\n};\nconst sliderType = () => {\n  result.classList.add(\"hidden\");\n  squareInput.classList.add(\"hidden\");\n  cmInput.classList.remove(\"hidden\");\n  slider.classList.remove(\"hidden\");\n};\n\n// Calculate and format the price and display it on the page\nconst calculatePriceCM = () => {\n  if (sliderOutput.value != \"\" && cmValue.value != \"\") {\n    result.classList.remove(\"hidden\");\n  } else result.classList.add(\"hidden\");\n  if (cmValue.value > 50) {\n    price = sliderOutput.value * cmValue.value * (productPrice + 100);\n  } else {\n    price = sliderOutput.value * cmValue.value * productPrice;\n  }\n  finalPrice.innerText = price.toLocaleString();\n};\n\nconst calculatePriceSquare = () => {\n  if (squareValue.value != \"\") {\n    result.classList.remove(\"hidden\");\n  } else result.classList.add(\"hidden\");\n\n  price = squareValue.value * productPrice;\n  finalPrice.innerText = price.toLocaleString();\n};\n\n// Triggers to call the appropriate functions when changes are made on the page\nselect.onchange = () => {\n  let i = select.selectedIndex;\n  data[i].type();\n  productPrice = data[i].price;\n\n  squareValue.value = cmValue.value = sliderOutput.value = \"\";\n  sliderRange.value = 6;\n};\nslider.oninput = () => {\n  calculatePriceCM();\n};\ncmInput.oninput = () => {\n  calculatePriceCM();\n};\nsquareInput.oninput = () => {\n  calculatePriceSquare();\n};\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/js/calculator.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/calculator.js"));
/******/ }
]);