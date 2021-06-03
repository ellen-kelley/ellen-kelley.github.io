/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkellen_kelley_github_io"] = self["webpackChunkellen_kelley_github_io"] || []).push([["contact"],{

/***/ "./src/assets/scss/contact.scss":
/*!**************************************!*\
  !*** ./src/assets/scss/contact.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/scss/contact.scss?");

/***/ }),

/***/ "./src/assets/js/contact.js":
/*!**********************************!*\
  !*** ./src/assets/js/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/contact.scss */ \"./src/assets/scss/contact.scss\");\n\n\nconst form = document.querySelector(\"#contact-form\");\nconst name = document.querySelector('[name = \"name\"]');\nconst email = document.querySelector('[name = \"email\"]');\nconst subject = document.querySelector('[name = \"subject\"]');\nconst message = document.querySelector('[name = \"message\"]');\nconst btn = document.querySelector(\".app-form-button\");\nconst loader = document.querySelector(\".app-form-group .loader\");\n\nconst sendMail = (name, email, subject, message) => {\n  Email.send({\n    Host: \"smtp.gmail.com\",\n    Username: \"shs.ad.agency@gmail.com\",\n    Password: \"ykpqrtbjxmpgndlh\",\n    To: \"info@shs.am\",\n    From: \"info@shs.am\",\n    ReplyAddress: email,\n    Subject: `Contact form message about ${subject}`,\n    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message} <br/>`,\n  }).then((message) => {\n    form.classList.remove(\"was-validated\");\n    form.reset();\n    btn.setAttribute(\"value\", \"Նամակն ուղարկվել է\");\n    form.removeEventListener(\"submit\", handleValidation);\n    btn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n    });\n    loader.style.display = \"none\";\n    btn.style.display = \"block\";\n  });\n};\n\nconst handleValidation = (e) => {\n  if (!form.checkValidity()) {\n    e.preventDefault();\n    e.stopPropagation();\n  } else if (form.checkValidity()) {\n    e.preventDefault();\n    e.stopPropagation();\n    sendMail(name.value, email.value, subject.value, message.value);\n    btn.style.display = \"none\";\n    loader.style.display = \"block\";\n  }\n  form.classList.add(\"was-validated\");\n};\n\nform.addEventListener(\"submit\", handleValidation);\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/js/contact.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/contact.js"));
/******/ }
]);