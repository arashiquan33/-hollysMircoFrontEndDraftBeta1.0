/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hollysys-mirco-front-end-framework.ts":
/*!***************************************************!*\
  !*** ./src/hollysys-mirco-front-end-framework.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AbstractHollysysMircoFrontEndApp\": () => /* binding */ AbstractHollysysMircoFrontEndApp,\n/* harmony export */   \"HollysysMircoFrontEndApp\": () => /* binding */ HollysysMircoFrontEndApp,\n/* harmony export */   \"HollysysMircoFrontEndAppManager\": () => /* binding */ HollysysMircoFrontEndAppManager\n/* harmony export */ });\n//var System=require('systemjs');\r\n/**\r\n * @ =应用抽象类\r\n */\r\nclass AbstractHollysysMircoFrontEndApp {\r\n    constructor(name, mountTo) {\r\n        //微应用名称\r\n        Object.defineProperty(this, \"name\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        //挂载的DOM节点\r\n        Object.defineProperty(this, \"mountTo\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        this.name = name;\r\n        this.mountTo = mountTo;\r\n    }\r\n    //获取名称\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    //获取挂载节点\r\n    getMountTo() {\r\n        return this.mountTo;\r\n    }\r\n}\r\n//定义静态属性，组织机构名称\r\nObject.defineProperty(AbstractHollysysMircoFrontEndApp, \"orgName\", {\r\n    enumerable: true,\r\n    configurable: true,\r\n    writable: true,\r\n    value: \"@hollysys\"\r\n});\r\n/**\r\n * @ =应用抽象类\r\n */\r\nclass HollysysMircoFrontEndApp {\r\n    constructor(appConstructorArguments) {\r\n        //微应用名称\r\n        Object.defineProperty(this, \"name\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        Object.defineProperty(this, \"pathPrefix\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        //获取挂载节点\r\n        // public getMountTo(): HTMLElement {\r\n        //     return this.mountTo;\r\n        // }\r\n        Object.defineProperty(this, \"beforeInstall\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        Object.defineProperty(this, \"install\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        Object.defineProperty(this, \"uninstall\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        Object.defineProperty(this, \"beforeUninstall\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        let { name, beforeInstall, install, uninstall, beforeUninstall, pathPrefix } = appConstructorArguments;\r\n        this.name = name;\r\n        this.pathPrefix = pathPrefix;\r\n        this.beforeInstall = beforeInstall;\r\n        this.install = install;\r\n        this.uninstall = uninstall;\r\n        this.beforeUninstall = beforeUninstall;\r\n    }\r\n    //挂载的DOM节点\r\n    // private mountTo: HTMLElement;\r\n    //获取名称\r\n    getName() {\r\n        return this.name;\r\n    }\r\n    //获取路由前缀\r\n    getPathPrefix() {\r\n        return this.pathPrefix;\r\n    }\r\n}\r\n/**\r\n * @description 微应用管理类，负责微应用的注册、装载、卸载,采用单例模式，同时只能存在一个manager\r\n * @example const hollysysMircoFrontEndAppManager=HollysysMircoFrontEndAppManager.getInstance();\r\n */\r\nclass HollysysMircoFrontEndAppManager {\r\n    //私有化构造函数，不能通过new 来实例对象，只能通过getInstance()方法 \r\n    constructor() {\r\n        //微应用挂载的节点ID\r\n        Object.defineProperty(this, \"_appMountTo\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: '#mountTo'\r\n        });\r\n        Object.defineProperty(this, \"_menuMountTo\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: '#menu'\r\n        });\r\n        Object.defineProperty(this, \"_isBootstrapCompleted\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: false\r\n        });\r\n        //已经注册的所有微应用\r\n        Object.defineProperty(this, \"_hasRegisterApps\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: []\r\n        });\r\n        console.warn(`please use HollysysMircoFrontEndAppManager.getInstance() method to get manager,insteadof new HollysysMircoFrontEndAppManager(),it  is single pattern class`);\r\n    }\r\n    /**\r\n     * 获取单例\r\n     */\r\n    static getInstance() {\r\n        if (this.instance == null) {\r\n            this.instance = new HollysysMircoFrontEndAppManager();\r\n        }\r\n        return HollysysMircoFrontEndAppManager.instance;\r\n    }\r\n    /**\r\n     * @description 注册应用\r\n     * @param registerAppArguments\r\n     */\r\n    registerApp(registerAppArguments) {\r\n        this._hasRegisterApps.push(registerAppArguments);\r\n    }\r\n    /**\r\n     * @description 获取注册的应用\r\n     */\r\n    getRegisterApps() {\r\n        return this._hasRegisterApps;\r\n    }\r\n    downloadApp(registerAppArguments) {\r\n        return new Promise((resolve, reject) => {\r\n            //获取head的标签\r\n            var head = document.getElementsByTagName('head')[0];\r\n            //创建script标签\r\n            var script = document.createElement('script');\r\n            //属性赋值\r\n            script.type = 'text/javascript';\r\n            //添加src属性值\r\n            script.src = registerAppArguments.appModuleUrl;\r\n            head.appendChild(script);\r\n            //回调\r\n            script.onload = function (e) {\r\n                const module = window[registerAppArguments.appModuleName];\r\n                debugger;\r\n                resolve(module);\r\n            };\r\n        });\r\n    }\r\n    /**\r\n     * @description 下载装配应用\r\n     * @param appConfig\r\n     */\r\n    async installApp(app) {\r\n        await app.beforeInstall();\r\n        await app.install({\r\n            mountTo: this._appMountTo,\r\n            props: { a: 1 }\r\n        });\r\n    }\r\n    /**\r\n     * @description 卸载应用\r\n     * @param appConfig\r\n     */\r\n    uninstallApp() {\r\n    }\r\n    /**\r\n     * @description 启动\r\n     */\r\n    bootstrap() {\r\n        //如果已经初始化成功，后续再调用该方法，直接return\r\n        if (this._isBootstrapCompleted)\r\n            return;\r\n        //绑定浏览器hashchange监听器\r\n        this.addHashchangeListener();\r\n        this._isBootstrapCompleted = true;\r\n    }\r\n    /**\r\n     * @description 绑定hashchange\r\n     */\r\n    addHashchangeListener() {\r\n        this.hashChangeHandler();\r\n        window.addEventListener('hashchange', this.hashChangeHandler.bind(this));\r\n    }\r\n    /**\r\n     * @description 浏览器hashchange变化的回调函数\r\n     */\r\n    async hashChangeHandler() {\r\n        let hash = location.hash;\r\n        let registerApps = this.getRegisterApps();\r\n        let hashMatchedRegisterApp = registerApps.find((registerApp) => {\r\n            let { routerBasePath } = registerApp;\r\n            let reg = new RegExp(\"^#\" + routerBasePath, \"g\");\r\n            if (reg.test(hash))\r\n                return true;\r\n        });\r\n        if (hashMatchedRegisterApp) {\r\n            let appModule = await this.downloadApp(hashMatchedRegisterApp);\r\n            if (appModule) {\r\n                await this.installApp(appModule);\r\n            }\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/framework/./src/hollysys-mirco-front-end-framework.ts?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hollysys_mirco_front_end_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hollysys-mirco-front-end-framework */ \"./src/hollysys-mirco-front-end-framework.ts\");\n \r\n \r\n //获取实例\r\n const hollysysMircoFrontEndAppManager =  _hollysys_mirco_front_end_framework__WEBPACK_IMPORTED_MODULE_0__.HollysysMircoFrontEndAppManager.getInstance();\r\n\r\n\r\n //注册微应用\r\n hollysysMircoFrontEndAppManager.registerApp({\r\n     name:'@hollysys-mirco-front-end/app-vue-example',\r\n     number:'0.0.24',\r\n     appModuleName:'hollysysMircoFrontEndAppVueExample',\r\n     appModuleUrl:'https://unpkg.com/@hollysys-mirco-front-end/app-vue-example@0.0.24/lib/hollysys-mirco-front-end-app-vue-example.umd.js',\r\n     routerBasePath:'/app-vue-example'\r\n })\r\n\r\n //启动\r\n hollysysMircoFrontEndAppManager.bootstrap();\r\n\r\n\n\n//# sourceURL=webpack://@hollysys-mirco-front-end/framework/./src/main.js?");

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;