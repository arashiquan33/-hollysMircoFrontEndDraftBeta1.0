/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib.ts":
/*!********************!*\
  !*** ./src/lib.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AbstractHollysysMircoFrontEndApp\": () => /* reexport safe */ _types_AbHollysysMircoFrontEndApp__WEBPACK_IMPORTED_MODULE_0__.AbstractHollysysMircoFrontEndApp,\n/* harmony export */   \"HollysysAppManager\": () => /* reexport safe */ _types_HollysysAppManager__WEBPACK_IMPORTED_MODULE_2__.HollysysAppManager,\n/* harmony export */   \"HollysysMircoFrontEndApp\": () => /* reexport safe */ _types_HollysysMircoFrontEndApp__WEBPACK_IMPORTED_MODULE_3__.HollysysMircoFrontEndApp\n/* harmony export */ });\n/* harmony import */ var _types_AbHollysysMircoFrontEndApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/AbHollysysMircoFrontEndApp */ \"./src/types/AbHollysysMircoFrontEndApp.ts\");\n/* harmony import */ var _types_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/model */ \"./src/types/model.ts\");\n/* harmony import */ var _types_HollysysAppManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/HollysysAppManager */ \"./src/types/HollysysAppManager.ts\");\n/* harmony import */ var _types_HollysysMircoFrontEndApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/HollysysMircoFrontEndApp */ \"./src/types/HollysysMircoFrontEndApp.ts\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/core/./src/lib.ts?");

/***/ }),

/***/ "./src/types/AbHollysysMircoFrontEndApp.ts":
/*!*************************************************!*\
  !*** ./src/types/AbHollysysMircoFrontEndApp.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AbstractHollysysMircoFrontEndApp\": () => /* binding */ AbstractHollysysMircoFrontEndApp\n/* harmony export */ });\n/**\r\n * @ =应用抽象类\r\n */\r\nclass AbstractHollysysMircoFrontEndApp {\r\n    constructor(name, mountTo) {\r\n        //微应用名称\r\n        Object.defineProperty(this, \"name\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        //挂载的DOM节点\r\n        Object.defineProperty(this, \"mountTo\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        this.name = name;\r\n        this.mountTo = mountTo;\r\n    }\r\n    //获取名称\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    //获取挂载节点\r\n    getMountTo() {\r\n        return this.mountTo;\r\n    }\r\n}\r\n//定义静态属性，组织机构名称\r\nObject.defineProperty(AbstractHollysysMircoFrontEndApp, \"orgName\", {\r\n    enumerable: true,\r\n    configurable: true,\r\n    writable: true,\r\n    value: \"@hollysys\"\r\n});\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/core/./src/types/AbHollysysMircoFrontEndApp.ts?");

/***/ }),

/***/ "./src/types/HollysysAppManager.ts":
/*!*****************************************!*\
  !*** ./src/types/HollysysAppManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HollysysAppManager\": () => /* binding */ HollysysAppManager\n/* harmony export */ });\nclass HollysysAppManager {\r\n    /**\r\n     * @description 注册应用，缓存应用注册配置对象\r\n     * @param configs\r\n     */\r\n    static registerApps(configs) {\r\n        this.appsConfig = configs;\r\n    }\r\n    /**\r\n     * @description 获取应用配置\r\n     */\r\n    static getAppsConfig() {\r\n        return this.appsConfig;\r\n    }\r\n    /**\r\n     * @description 获取当前所有应用\r\n     */\r\n    static getApps() {\r\n        return this.appsArray;\r\n    }\r\n    /**\r\n     * @description 下载装配应用\r\n     * @param appConfig\r\n     */\r\n    static installApp(appConfig) {\r\n        let instance = new appConfig.appClass(appConfig.name, appConfig.mountTo);\r\n        let isRunning = true;\r\n        let { name, pathPrefix, mountTo, appClass, } = appConfig;\r\n        let app = {\r\n            instance,\r\n            isRunning,\r\n            name,\r\n            pathPrefix,\r\n            mountTo,\r\n            appClass,\r\n        };\r\n        this.appsArray.push(app);\r\n        app.instance.beforeInstall();\r\n        app.instance.install();\r\n    }\r\n    /**\r\n     * @description 卸载应用\r\n     * @param appConfig\r\n     */\r\n    static uninstallApp(appConfig) {\r\n        var app = {};\r\n        var index = 0;\r\n        this.appsArray.forEach((a, i) => {\r\n            if (a.name === appConfig.name) {\r\n                app = a;\r\n                index = i;\r\n            }\r\n        });\r\n        if (app) {\r\n            app.instance.beforeUninstall();\r\n            app.instance.uninstall();\r\n            this.appsArray.splice(index);\r\n        }\r\n    }\r\n}\r\nObject.defineProperty(HollysysAppManager, \"appsConfig\", {\r\n    enumerable: true,\r\n    configurable: true,\r\n    writable: true,\r\n    value: []\r\n});\r\nObject.defineProperty(HollysysAppManager, \"appsArray\", {\r\n    enumerable: true,\r\n    configurable: true,\r\n    writable: true,\r\n    value: []\r\n});\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/core/./src/types/HollysysAppManager.ts?");

/***/ }),

/***/ "./src/types/HollysysMircoFrontEndApp.ts":
/*!***********************************************!*\
  !*** ./src/types/HollysysMircoFrontEndApp.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HollysysMircoFrontEndApp\": () => /* binding */ HollysysMircoFrontEndApp\n/* harmony export */ });\n/**\r\n * @ =应用抽象类\r\n */\r\nclass HollysysMircoFrontEndApp {\r\n    constructor(appConstructorArguments) {\r\n        //微应用名称\r\n        Object.defineProperty(this, \"name\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        Object.defineProperty(this, \"pathPrefix\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        //获取挂载节点\r\n        // public getMountTo(): HTMLElement {\r\n        //     return this.mountTo;\r\n        // }\r\n        Object.defineProperty(this, \"beforeInstall\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: function () { }\r\n        });\r\n        Object.defineProperty(this, \"install\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: function () { }\r\n        });\r\n        Object.defineProperty(this, \"uninstall\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: function () { }\r\n        });\r\n        Object.defineProperty(this, \"beforeUninstall\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: function () { }\r\n        });\r\n        let { name, beforeInstall, install, uninstall, beforeUninstall, pathPrefix } = appConstructorArguments;\r\n        this.name = name;\r\n        this.pathPrefix = pathPrefix;\r\n        this.beforeInstall = beforeInstall;\r\n        this.install = install;\r\n        this.uninstall = uninstall;\r\n        this.beforeUninstall = beforeUninstall;\r\n    }\r\n    //挂载的DOM节点\r\n    // private mountTo: HTMLElement;\r\n    //获取名称\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    //获取路由前缀\r\n    getPathPrefix() {\r\n        return this.pathPrefix;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/core/./src/types/HollysysMircoFrontEndApp.ts?");

/***/ }),

/***/ "./src/types/model.ts":
/*!****************************!*\
  !*** ./src/types/model.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/core/./src/types/model.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/lib.ts");
/******/ })()
;
});