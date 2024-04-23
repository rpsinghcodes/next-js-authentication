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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
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

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\login.js */ \"(api)/./pages/api/auth/login.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/login\",\n        pathname: \"/api/auth/login\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_login_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1Q2xvZ2luLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3lEO0FBQ3pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxxREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMscURBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8/YTUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW4uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9sb2dpblwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/auth */ \"(api)/./pages/api/util/auth.js\");\n\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { username, password } = req.body;\n            const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(process.env.MONGODB_URL);\n            await client.connect();\n            console.log(\"connected to database.\");\n            const db = (await client).db(\"Events\");\n            const collection = db.collection(\"credentials\");\n            const data = await collection.find({\n                userName: username\n            }).toArray();\n            if (data.length !== 0) {\n                const isValidCredential = await (0,_util_auth__WEBPACK_IMPORTED_MODULE_2__.comparePassword)(password, data[0]?.password);\n                if (isValidCredential) {\n                    res.status(200).json({\n                        success: true,\n                        username: username,\n                        token: (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign)({\n                            email: username\n                        }, process.env.SECRET, {\n                            expiresIn: \"1h\"\n                        })\n                    });\n                }\n                if (!isValidCredential) {\n                    res.status(401).json({\n                        err: \"Please provide valid credentials.\"\n                    });\n                }\n            } else {\n                res.status(401).json({\n                    err: \"Please provide a valid userName.\"\n                });\n            }\n        } catch (err) {\n            console.log(err);\n            if (err.type === \"CredentialsSignin\") {\n                res.status(401).json({\n                    error: \"Invalid credentials.\"\n                });\n            } else {\n                res.status(500).json({\n                    error: \"Something went wrong.\"\n                });\n            }\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDSDtBQUNhO0FBSWpDLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUMxQixJQUFJO1lBQ0EsTUFBTSxFQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBQyxHQUFHSixJQUFJSyxJQUFJO1lBQ3JDLE1BQU1DLFNBQVMsSUFBS1YsZ0RBQVdBLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztZQUN2RCxNQUFNSCxPQUFPSSxPQUFPO1lBQ3BCQyxRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNQyxLQUFLLENBQUMsTUFBTVAsTUFBSyxFQUFHTyxFQUFFLENBQUM7WUFDN0IsTUFBTUMsYUFBYUQsR0FBR0MsVUFBVSxDQUFDO1lBRWpDLE1BQU1DLE9BQU8sTUFBTUQsV0FBV0UsSUFBSSxDQUFDO2dCQUFDQyxVQUFVZDtZQUFRLEdBQUdlLE9BQU87WUFDaEUsSUFBR0gsS0FBS0ksTUFBTSxLQUFLLEdBQUc7Z0JBQ2xCLE1BQU1DLG9CQUFvQixNQUFPdEIsMkRBQWVBLENBQUNNLFVBQVVXLElBQUksQ0FBQyxFQUFFLEVBQUVYO2dCQUNwRSxJQUFHZ0IsbUJBQW1CO29CQUNsQm5CLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFDQyxTQUFTO3dCQUFNcEIsVUFBVUE7d0JBQVlxQixPQUFPM0Isa0RBQUlBLENBQUM7NEJBQUM0QixPQUFPdEI7d0JBQVEsR0FBSUksUUFBUUMsR0FBRyxDQUFDa0IsTUFBTSxFQUFFOzRCQUFDQyxXQUFVO3dCQUFJO29CQUFFO2dCQUNwSTtnQkFDQSxJQUFHLENBQUNQLG1CQUFtQjtvQkFDbkJuQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzt3QkFBQ00sS0FBSztvQkFBbUM7Z0JBQ2xFO1lBQ0osT0FBTztnQkFDSDNCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFDTSxLQUFJO2dCQUFrQztZQUNoRTtRQUVKLEVBQUMsT0FBTUEsS0FBSztZQUNSakIsUUFBUUMsR0FBRyxDQUFDZ0I7WUFDWixJQUFHQSxJQUFJQyxJQUFJLEtBQUsscUJBQXFCO2dCQUNqQzVCLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFDUSxPQUFPO2dCQUFzQjtZQUN2RCxPQUFNO2dCQUNGN0IsSUFBSW9CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUNRLE9BQU87Z0JBQXVCO1lBQ3hEO1FBR0o7SUFFSjtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBzaWdufSBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgeyAgY29tcGFyZVBhc3N3b3JkIH0gZnJvbSAnLi4vdXRpbC9hdXRoJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHt1c2VybmFtZSwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3ICBNb25nb0NsaWVudChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCk7XHJcbiAgICAgICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIGRhdGFiYXNlLicpO1xyXG4gICAgICAgIGNvbnN0IGRiID0gKGF3YWl0IGNsaWVudCkuZGIoJ0V2ZW50cycpO1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdjcmVkZW50aWFscycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmQoe3VzZXJOYW1lOiB1c2VybmFtZX0pLnRvQXJyYXkoKTtcclxuICAgICAgICBpZihkYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkQ3JlZGVudGlhbCA9IGF3YWl0ICBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIGRhdGFbMF0/LnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZihpc1ZhbGlkQ3JlZGVudGlhbCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6IHRydWUsIHVzZXJuYW1lOiB1c2VybmFtZSwgICB0b2tlbjogc2lnbih7ZW1haWw6IHVzZXJuYW1lfSwgIHByb2Nlc3MuZW52LlNFQ1JFVCwge2V4cGlyZXNJbjpcIjFoXCJ9KX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWlzVmFsaWRDcmVkZW50aWFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7ZXJyOiBcIlBsZWFzZSBwcm92aWRlIHZhbGlkIGNyZWRlbnRpYWxzLlwifSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtlcnI6XCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIHVzZXJOYW1lLlwifSlcclxuICAgICAgICB9ICAgXHJcblxyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgaWYoZXJyLnR5cGUgPT09ICdDcmVkZW50aWFsc1NpZ25pbicpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oe2Vycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscy4nfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nLid9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG59Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50Iiwic2lnbiIsImNvbXBhcmVQYXNzd29yZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImZpbmQiLCJ1c2VyTmFtZSIsInRvQXJyYXkiLCJsZW5ndGgiLCJpc1ZhbGlkQ3JlZGVudGlhbCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwidG9rZW4iLCJlbWFpbCIsIlNFQ1JFVCIsImV4cGlyZXNJbiIsImVyciIsInR5cGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Flogin&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Clogin.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();