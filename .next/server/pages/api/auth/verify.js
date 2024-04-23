"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/verify";
exports.ids = ["pages/api/auth/verify"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cverify.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cverify.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_verify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\verify.js */ \"(api)/./pages/api/auth/verify.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_verify_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_verify_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/verify\",\n        pathname: \"/api/auth/verify\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_verify_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZ2ZXJpZnkmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q2F1dGglNUN2ZXJpZnkuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDMEQ7QUFDMUQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHNEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxzREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLz8wYWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYXV0aFxcXFx2ZXJpZnkuanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3ZlcmlmeVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvdmVyaWZ5XCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cverify.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/verify.js":
/*!**********************************!*\
  !*** ./pages/api/auth/verify.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _util_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/auth */ \"(api)/./pages/api/util/auth.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { token } = req.body;\n        if (!token) {\n            res.status(400).json({\n                message: \"Invalid user.\"\n            });\n        }\n        try {\n            const result = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_0__.validateJSONToken)(token);\n            res.status(200).json({\n                message: result\n            });\n        } catch (err) {\n            res.status(401).json({\n                message: \"Invalid User\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC92ZXJpZnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFFbEMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLElBQUdELElBQUlFLE1BQU0sS0FBRyxRQUFRO1FBQ3BCLE1BQU0sRUFBQ0MsS0FBSyxFQUFDLEdBQUdILElBQUlJLElBQUk7UUFDeEIsSUFBRyxDQUFDRCxPQUFPO1lBQ1BGLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVE7WUFBZTtRQUNsRDtRQUNBLElBQUk7WUFDQSxNQUFNQyxTQUFTLE1BQU1WLDZEQUFpQkEsQ0FBQ0s7WUFDdkNGLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVFDO1lBQU07UUFDeEMsRUFBQyxPQUFNQyxLQUFLO1lBQ1JSLElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVM7WUFBYztRQUNqRDtJQUVKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2F1dGgvdmVyaWZ5LmpzP2E1MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsaWRhdGVKU09OVG9rZW4gfSBmcm9tIFwiLi4vdXRpbC9hdXRoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZihyZXEubWV0aG9kPT09J1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3Qge3Rva2VufSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGlmKCF0b2tlbikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6XCJJbnZhbGlkIHVzZXIuXCJ9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZUpTT05Ub2tlbih0b2tlbikgICAgICBcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6cmVzdWx0fSlcclxuICAgICAgICB9Y2F0Y2goZXJyKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHttZXNzYWdlOiAnSW52YWxpZCBVc2VyJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInZhbGlkYXRlSlNPTlRva2VuIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRva2VuIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicmVzdWx0IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/verify.js\n");

/***/ }),

/***/ "(api)/./pages/api/util/auth.js":
/*!********************************!*\
  !*** ./pages/api/util/auth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   createJSONToken: () => (/* binding */ createJSONToken),\n/* harmony export */   validateJSONToken: () => (/* binding */ validateJSONToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction createJSONToken(email) {\n    return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)({\n        email\n    }, process.env.SECRET, {\n        expiresIn: \"1h\"\n    });\n}\nfunction validateJSONToken(token) {\n    return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, process.env.SECRET);\n}\nfunction comparePassword(password, hash) {\n    return (0,bcrypt__WEBPACK_IMPORTED_MODULE_1__.compare)(password, hash);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbC9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDWDtBQUl4QixTQUFTRyxnQkFBZ0JDLEtBQUs7SUFDakMsT0FBT0osa0RBQUlBLENBQUM7UUFBQ0k7SUFBSyxHQUFHQyxRQUFRQyxHQUFHLENBQUNDLE1BQU0sRUFBRTtRQUFDQyxXQUFXO0lBQUk7QUFDN0Q7QUFFTyxTQUFTQyxrQkFBa0JDLEtBQUs7SUFDbkMsT0FBT1Qsb0RBQU1BLENBQUNTLE9BQU9MLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtBQUMzQztBQUdPLFNBQVNJLGdCQUFnQkMsUUFBUSxFQUFFQyxJQUFJO0lBQzFDLE9BQU9YLCtDQUFPQSxDQUFDVSxVQUFVQztBQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvdXRpbC9hdXRoLmpzPzRhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaWduLCB2ZXJpZnl9IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7Y29tcGFyZX0gZnJvbSAnYmNyeXB0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUpTT05Ub2tlbihlbWFpbCkge1xyXG4gICAgcmV0dXJuIHNpZ24oe2VtYWlsfSwgcHJvY2Vzcy5lbnYuU0VDUkVULCB7ZXhwaXJlc0luOiAnMWgnfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUpTT05Ub2tlbih0b2tlbikge1xyXG4gICAgcmV0dXJuIHZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuU0VDUkVUKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIGhhc2gpIHtcclxuICAgIHJldHVybiBjb21wYXJlKHBhc3N3b3JkLCBoYXNoKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzaWduIiwidmVyaWZ5IiwiY29tcGFyZSIsImNyZWF0ZUpTT05Ub2tlbiIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsImV4cGlyZXNJbiIsInZhbGlkYXRlSlNPTlRva2VuIiwidG9rZW4iLCJjb21wYXJlUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/util/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fverify&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cverify.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();