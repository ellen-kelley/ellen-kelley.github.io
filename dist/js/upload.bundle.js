/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkellen_kelley_github_io"] = self["webpackChunkellen_kelley_github_io"] || []).push([["upload"],{

/***/ "./src/assets/js/upload.js":
/*!*********************************!*\
  !*** ./src/assets/js/upload.js ***!
  \*********************************/
/***/ (() => {

eval("const filters = [\"\", \"filter-app\", \"filter-card\", \"filter-web\"];\ndocument.querySelector(\".uploader\").addEventListener(\"change\", (e) => {\n  const typesAllowed = [\"image/png\", \"image/jpeg\"];\n  let selectedImages = Array.from(e.target.files);\n  let template = ``;\n  selectedImages.forEach((file) => {\n    if (file && typesAllowed.includes(file.type)) {\n      template += `\n      <div>\n        <img src=\"${URL.createObjectURL(file)}\">\n        <select class=\"form-select\" aria-label=\"Default select example\">\n          <option selected>Ընտրեք filter</option>\n          <option>Filter 1</option>\n          <option>Filter 2</option>\n          <option>Filter 3</option>\n        </select>\n      </div>\n      `;\n      file.filter = filters[0];\n    } else {\n      alert(\"Please select an image file (png or jpg)\");\n    }\n  });\n  previewData(template, selectedImages);\n});\n\nconst previewData = (template, selectedImages) => {\n  if (template) {\n    document.querySelector(\".upload-btn\").style.display = \"none\";\n    document.querySelector(\".container\").innerHTML = template;\n    document.querySelector(\".container\").style.display = \"flex\";\n    document.querySelector(\".confirm\").style.display = \"block\";\n    getFilters(selectedImages);\n    document.querySelector(\".sumbit-btn\").addEventListener(\"click\", (e) => {\n      sendToDatabase(selectedImages);\n    });\n  }\n};\n\nconst getFilters = (selectedImages) => {\n  const select = document.querySelectorAll(\".form-select\");\n  select.forEach((item, index) => {\n    item.addEventListener(\"change\", (e) => {\n      selectedImages[index].filter = filters[item.selectedIndex];\n      console.log(selectedImages);\n    });\n  });\n};\n\nconst sendToDatabase = (selectedImages) => {\n  selectedImages.forEach((file) => {\n    const storageRef = projectStorage.ref(\"gallery/\" + file.name);\n    const databaseRef = projectFirestore.ref(\"images/\");\n    const newImageRef = databaseRef.push();\n\n    storageRef.put(file).on(\n      \"state_changed\",\n      (snap) => {},\n      (err) => {\n        console.log(err);\n        document.querySelector(\".message h2\").textContent = \"Գործողությունը ձախողվեց!\";\n        document.querySelector(\".message\").style.display = \"block\";\n      },\n      async () => {\n        const url = await storageRef.getDownloadURL();\n        const name = file.name;\n        const filter = file.filter;\n        await newImageRef.set({ url, name, filter });\n        document.querySelector(\".message\").style.display = \"block\";\n        document.querySelector(\".message h2\").textContent = \"Նկարները հաջողությամբ տեղադրվել են!\";\n      }\n    );\n  });\n};\n\n\n//# sourceURL=webpack://ellen-kelley.github.io/./src/assets/js/upload.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/upload.js"));
/******/ }
]);