/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PickerReact/createElement.js":
/*!******************************************!*\
  !*** ./src/PickerReact/createElement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nvar createElement = function createElement(type, props) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n  return {\n    type: type,\n    props: props,\n    children: children\n  };\n};\n\n\n//# sourceURL=webpack://virtualDom/./src/PickerReact/createElement.js?");

/***/ }),

/***/ "./src/PickerReact/index.js":
/*!**********************************!*\
  !*** ./src/PickerReact/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/PickerReact/createElement.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createElement: _createElement__WEBPACK_IMPORTED_MODULE_0__.createElement\n});\n\n//# sourceURL=webpack://virtualDom/./src/PickerReact/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PickerReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PickerReact */ \"./src/PickerReact/index.js\");\n\nvar root = document.getElementById(\"root\");\nvar virtualDOM = _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", {\n  className: \"container\"\n}, _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h1\", null, \"\\u4F60\\u597D Tiny React\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h2\", {\n  \"data-test\": \"test\"\n}, \"(\\u7F16\\u7801\\u5FC5\\u6740\\u6280)\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", null, \"\\u5D4C\\u59571 \", _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", null, \"\\u5D4C\\u5957 1.1\")), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h3\", null, \"(\\u89C2\\u5BDF: \\u8FD9\\u4E2A\\u5C06\\u4F1A\\u88AB\\u6539\\u53D8)\"),  false && 0,  true && _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", null, \"2\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"span\", null, \"\\u8FD9\\u662F\\u4E00\\u6BB5\\u5185\\u5BB9\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"button\", {\n  onClick: function onClick() {\n    return alert(\"你好\");\n  }\n}, \"\\u70B9\\u51FB\\u6211\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h3\", null, \"\\u8FD9\\u4E2A\\u5C06\\u4F1A\\u88AB\\u5220\\u9664\"), \"2, 3\", _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"input\", {\n  type: \"text\",\n  value: \"13\"\n}));\nconsole.log(virtualDOM);\nvar modifyDOM = _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", {\n  className: \"container\"\n}, _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h1\", null, \"\\u4F60\\u597D Tiny React\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h2\", {\n  \"data-test\": \"test123\"\n}, \"(\\u7F16\\u7801\\u5FC5\\u6740\\u6280)\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", null, \"\\u5D4C\\u59571 \", _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", null, \"\\u5D4C\\u5957 1.1\")), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"h3\", null, \"(\\u89C2\\u5BDF: \\u8FD9\\u4E2A\\u5C06\\u4F1A\\u88AB\\u6539\\u53D8)\"),  false && 0,  true && _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"div\", null, \"2\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"button\", {\n  onClick: function onClick() {\n    return alert(\"你好!!!!!\");\n  }\n}, \"\\u70B9\\u51FB\\u6211\"), _PickerReact__WEBPACK_IMPORTED_MODULE_0__[\"default\"].creatElement(\"input\", {\n  type: \"text\",\n  value: \"13\"\n}));\n\n//# sourceURL=webpack://virtualDom/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;