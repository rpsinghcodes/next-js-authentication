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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/Layout.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Layout_main__RMpyO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQubW9kdWxlLmNzcz85MGNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJMYXlvdXRfbWFpbl9fUk1weU9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Layout.module.css\n");

/***/ }),

/***/ "./components/layout/MainNavigation.module.css":
/*!*****************************************************!*\
  !*** ./components/layout/MainNavigation.module.css ***!
  \*****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"MainNavigation_header__JBIUU\",\n\t\"logo\": \"MainNavigation_logo__aeMOX\",\n\t\"active\": \"MainNavigation_active__y3Fl_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzP2Q2MDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiTWFpbk5hdmlnYXRpb25faGVhZGVyX19KQklVVVwiLFxuXHRcImxvZ29cIjogXCJNYWluTmF2aWdhdGlvbl9sb2dvX19hZU1PWFwiLFxuXHRcImFjdGl2ZVwiOiBcIk1haW5OYXZpZ2F0aW9uX2FjdGl2ZV9feTNGbF9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/MainNavigation.module.css\n");

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _MainNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainNavigation */ \"./components/layout/MainNavigation.js\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/layout/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ \"./store/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_1__, _MainNavigation__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_5__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_1__, _MainNavigation__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction Layout(props) {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const isLogedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.credential.isLogedIn);\n    console.log(isLogedIn);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\") || \"\";\n        const username = localStorage.getItem(\"userName\") || \"\";\n        if (token.length > 0 || username.length > 0) {\n            dispatch((0,_store__WEBPACK_IMPORTED_MODULE_5__.Login)({\n                token,\n                username,\n                isLogedIn: true\n            }));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNavigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: props.children\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\Layout.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\Layout.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDSTtBQUNKO0FBQ1I7QUFDUTtBQUNOO0FBSXBDLFNBQVNNLE9BQU9DLEtBQUs7SUFDbkIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU1LLFlBQVlULHdEQUFXQSxDQUFDVSxDQUFBQSxRQUFTQSxNQUFNQyxVQUFVLENBQUNGLFNBQVM7SUFDakVHLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWk4sZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxRQUFRQyxhQUFhQyxPQUFPLENBQUMsWUFBWTtRQUNqRCxNQUFNQyxXQUFXRixhQUFhQyxPQUFPLENBQUMsZUFBZTtRQUNyRCxJQUFHRixNQUFNSSxNQUFNLEdBQUcsS0FBS0QsU0FBU0MsTUFBTSxHQUFHLEdBQUc7WUFDMUNWLFNBQVNILDZDQUFLQSxDQUFDO2dCQUFDUztnQkFBT0c7Z0JBQVVSLFdBQVc7WUFBSTtRQUNsRDtJQUNBLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDVTs7MEJBQ0MsOERBQUNsQix1REFBY0E7Ozs7OzBCQUNmLDhEQUFDbUI7Z0JBQUtDLFdBQVduQixnRUFBWTswQkFBR0ssTUFBTWUsUUFBUTs7Ozs7Ozs7Ozs7O0FBR3BEO0FBR0EsaUVBQWVoQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5qcz9jMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1haW5OYXZpZ2F0aW9uIGZyb20gJy4vTWFpbk5hdmlnYXRpb24nO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5cblxuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyAgXG4gIGNvbnN0IGlzTG9nZWRJbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNyZWRlbnRpYWwuaXNMb2dlZEluKTtcbiAgY29uc29sZS5sb2coaXNMb2dlZEluKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8ICcnO1xuICBjb25zdCB1c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIikgfHwgXCJcIjtcbiAgaWYodG9rZW4ubGVuZ3RoID4gMCB8fCB1c2VybmFtZS5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGF0Y2goTG9naW4oe3Rva2VuLCB1c2VybmFtZSwgaXNMb2dlZEluOiB0cnVlfSkpO1xuICB9XG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWFpbk5hdmlnYXRpb24gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiTWFpbk5hdmlnYXRpb24iLCJjbGFzc2VzIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJMb2dpbiIsIkxheW91dCIsInByb3BzIiwiZGlzcGF0Y2giLCJpc0xvZ2VkSW4iLCJzdGF0ZSIsImNyZWRlbnRpYWwiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlcm5hbWUiLCJsZW5ndGgiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Layout.js\n");

/***/ }),

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainNavigation.module.css */ \"./components/layout/MainNavigation.module.css\");\n/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/token */ \"./util/token.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_4__]);\nreact_redux__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MainNavigation() {\n    const credential = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.credential);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const Logout = ()=>{\n        (0,_util_token__WEBPACK_IMPORTED_MODULE_3__.isTokenVerified)(\"\");\n        router.reload();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),\n                children: \"React Meetups\"\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                children: \"All Meetups\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: credential.isLogedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/new-meetup\",\n                                children: \"Add New Meetup\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                                lineNumber: 24,\n                                columnNumber: 38\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                                lineNumber: 24,\n                                columnNumber: 86\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: !credential.isLogedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/signup\",\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                                lineNumber: 27,\n                                columnNumber: 41\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: credential.isLogedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: Logout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                                lineNumber: 30,\n                                columnNumber: 38\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\components\\\\layout\\\\MainNavigation.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNavigation);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDcUI7QUFDQztBQUNUO0FBQ0Y7QUFFeEMsU0FBU0s7SUFDTCxNQUFNQyxhQUFhSCx3REFBV0EsQ0FBQ0ksQ0FBQUEsUUFBU0EsTUFBTUQsVUFBVTtJQUN4RCxNQUFNRSxTQUFVSixzREFBU0E7SUFDekIsTUFBTUssU0FBUztRQUNiUCw0REFBZUEsQ0FBQztRQUNoQk0sT0FBT0UsTUFBTTtJQUNmO0lBRUYscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVdYLDBFQUFjOzswQkFDL0IsOERBQUNZO2dCQUFJRCxXQUFXWCx3RUFBWTswQkFBRTs7Ozs7OzBCQUM5Qiw4REFBQ2M7MEJBQ0MsNEVBQUNDOztzQ0FDQyw4REFBQ0M7c0NBQ0MsNEVBQUNqQixrREFBSUE7Z0NBQUNrQixNQUFLOzBDQUFJOzs7Ozs7Ozs7OztzQ0FFakIsOERBQUNEO3NDQUNFWCxXQUFXYSxTQUFTLGlCQUFJLDhEQUFDbkIsa0RBQUlBO2dDQUFDa0IsTUFBSzswQ0FBYzs7Ozs7cURBQXVCLDhEQUFDbEIsa0RBQUlBO2dDQUFDa0IsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7c0NBRS9GLDhEQUFDRDtzQ0FDRSxDQUFDWCxXQUFXYSxTQUFTLGtCQUFNLDhEQUFDbkIsa0RBQUlBO2dDQUFDa0IsTUFBSzswQ0FBVzs7Ozs7Ozs7Ozs7c0NBRXBELDhEQUFDRDtzQ0FDRVgsV0FBV2EsU0FBUyxrQkFBSSw4REFBQ0M7Z0NBQU9DLFNBQVNaOzBDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlEO0FBRUEsaUVBQWVKLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanM/YWI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGlzVG9rZW5WZXJpZmllZCB9IGZyb20gJy4uLy4uL3V0aWwvdG9rZW4nO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IGNyZWRlbnRpYWwgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jcmVkZW50aWFsKTtcbiAgICBjb25zdCByb3V0ZXIgPSAgdXNlUm91dGVyKCk7XG4gICAgY29uc3QgTG9nb3V0ID0gKCkgPT4ge1xuICAgICAgaXNUb2tlblZlcmlmaWVkKCcnKTtcbiAgICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+UmVhY3QgTWVldHVwczwvZGl2PlxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPkFsbCBNZWV0dXBzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAge2NyZWRlbnRpYWwuaXNMb2dlZEluID8gIDxMaW5rIGhyZWY9Jy9uZXctbWVldHVwJz5BZGQgTmV3IE1lZXR1cDwvTGluaz46IDxMaW5rIGhyZWY9Jy9sb2dpbic+TG9naW48L0xpbms+fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgeyFjcmVkZW50aWFsLmlzTG9nZWRJbiAmJiAgIDxMaW5rIGhyZWY9Jy9zaWdudXAnID5TaWdudXA8L0xpbms+fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAge2NyZWRlbnRpYWwuaXNMb2dlZEluICYmIDxidXR0b24gb25DbGljaz17TG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj59XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY2xhc3NlcyIsImlzVG9rZW5WZXJpZmllZCIsInVzZVNlbGVjdG9yIiwidXNlUm91dGVyIiwiTWFpbk5hdmlnYXRpb24iLCJjcmVkZW50aWFsIiwic3RhdGUiLCJyb3V0ZXIiLCJMb2dvdXQiLCJyZWxvYWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJsb2dvIiwibmF2IiwidWwiLCJsaSIsImhyZWYiLCJpc0xvZ2VkSW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/MainNavigation.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, react_redux__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__]);\n([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__, react_redux__WEBPACK_IMPORTED_MODULE_3__, _store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNrQjtBQUNWO0FBQ047QUFDakMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0osaURBQVFBO1FBQUNDLE9BQU9BLHlDQUFLQTtrQkFDcEIsNEVBQUNGLGlFQUFNQTtzQkFDTCw0RUFBQ0k7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlXCI7XG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIlByb3ZpZGVyIiwic3RvcmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login),\n/* harmony export */   Logout: () => (/* binding */ Logout),\n/* harmony export */   store: () => (/* binding */ store),\n/* harmony export */   updateToken: () => (/* binding */ updateToken)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst initialState = {\n    username: \"\",\n    isLogedIn: false,\n    token: \"\"\n};\nconst credentialSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"credential\",\n    initialState,\n    reducers: {\n        Login (state, action) {\n            state.username = action.payload.username;\n            state.isLogedIn = true;\n            state.token = action.payload.token;\n        },\n        Logout (state, action) {\n            state.username = \"\";\n            state.isLogedIn = false;\n            state.token = \"\";\n        },\n        updateToken (state, action) {\n            state.token = action.payload.token;\n        }\n    }\n});\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        credential: credentialSlice.reducer\n    }\n});\nconst { Login, Logout, updateToken } = credentialSlice.actions;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRDtBQUcvRCxNQUFNRSxlQUFlO0lBQ2pCQyxVQUFVO0lBQ1ZDLFdBQVU7SUFDVkMsT0FBTztBQUNYO0FBR0EsTUFBTUMsa0JBQWtCTCw2REFBV0EsQ0FBQztJQUNoQ00sTUFBTTtJQUNOTDtJQUNBTSxVQUFVO1FBQ05DLE9BQU1DLEtBQUssRUFBRUMsTUFBTTtZQUNmRCxNQUFNUCxRQUFRLEdBQUdRLE9BQU9DLE9BQU8sQ0FBQ1QsUUFBUTtZQUN4Q08sTUFBTU4sU0FBUyxHQUFHO1lBQ2xCTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9DLE9BQU8sQ0FBQ1AsS0FBSztRQUN0QztRQUVBUSxRQUFPSCxLQUFLLEVBQUVDLE1BQU07WUFDaEJELE1BQU1QLFFBQVEsR0FBRztZQUNqQk8sTUFBTU4sU0FBUyxHQUFHO1lBQ2xCTSxNQUFNTCxLQUFLLEdBQUc7UUFDbEI7UUFDQVMsYUFBWUosS0FBSyxFQUFFQyxNQUFNO1lBQ3JCRCxNQUFNTCxLQUFLLEdBQUdNLE9BQU9DLE9BQU8sQ0FBQ1AsS0FBSztRQUN0QztJQUNKO0FBRUo7QUFJTyxNQUFNVSxRQUFRZixnRUFBY0EsQ0FBQztJQUNoQ2dCLFNBQVM7UUFBQ0MsWUFBWVgsZ0JBQWdCVSxPQUFPO0lBQUE7QUFDakQsR0FBRTtBQUVLLE1BQU0sRUFBQ1AsS0FBSyxFQUFFSSxNQUFNLEVBQUVDLFdBQVcsRUFBQyxHQUFHUixnQkFBZ0JZLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9zdG9yZS9pbmRleC5qcz81NmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgaXNMb2dlZEluOmZhbHNlLFxyXG4gICAgdG9rZW46ICcnLFxyXG59XHJcblxyXG5cclxuY29uc3QgY3JlZGVudGlhbFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NyZWRlbnRpYWwnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBMb2dpbihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWU7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzTG9nZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQudG9rZW47XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgTG9nb3V0KHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSAnJztcclxuICAgICAgICAgICAgc3RhdGUuaXNMb2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN0YXRlLnRva2VuID0gJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVUb2tlbihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQudG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge2NyZWRlbnRpYWw6IGNyZWRlbnRpYWxTbGljZS5yZWR1Y2VyfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHtMb2dpbiwgTG9nb3V0LCB1cGRhdGVUb2tlbn0gPSBjcmVkZW50aWFsU2xpY2UuYWN0aW9uczsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInVzZXJuYW1lIiwiaXNMb2dlZEluIiwidG9rZW4iLCJjcmVkZW50aWFsU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJMb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIkxvZ291dCIsInVwZGF0ZVRva2VuIiwic3RvcmUiLCJyZWR1Y2VyIiwiY3JlZGVudGlhbCIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./util/token.js":
/*!***********************!*\
  !*** ./util/token.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getExpirationDate: () => (/* binding */ getExpirationDate),\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   isTokenVerified: () => (/* binding */ isTokenVerified)\n/* harmony export */ });\nfunction getToken() {\n    const token = localStorage.getItem(\"token\");\n    if (!token) {\n        return null;\n    }\n    const tokenDuration = getExpirationDate();\n    if (tokenDuration < 0) {\n        return \"EXPIRED\";\n    }\n    return token;\n}\nfunction getExpirationDate() {\n    const storedExpirationDate = localStorage.getItem(\"expiration\");\n    const expirationDate = new Date(storedExpirationDate);\n    const now = new Date();\n    const duration = expirationDate.getTime() - now.getTime();\n    return duration;\n}\nasync function isTokenVerified(token) {\n    try {\n        let res = await fetch(\"/api/auth/verify\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                token\n            })\n        });\n        if (!res.ok) {\n            localStorage.clear();\n            return false;\n        }\n        res = await res.json();\n        return true;\n    } catch (err) {\n        console.log(\"error in fetching /api/auth/verify\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3Rva2VuLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBO0lBQ2QsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO0lBQ25DLElBQUksQ0FBQ0YsT0FBTztRQUNWLE9BQU87SUFDVDtJQUNBLE1BQU1HLGdCQUFnQkM7SUFDdEIsSUFBSUQsZ0JBQWdCLEdBQUc7UUFDckIsT0FBTztJQUNUO0lBQ0EsT0FBT0g7QUFDVDtBQUVPLFNBQVNJO0lBQ2QsTUFBTUMsdUJBQXVCSixhQUFhQyxPQUFPLENBQUM7SUFDbEQsTUFBTUksaUJBQWlCLElBQUlDLEtBQUtGO0lBQ2hDLE1BQU1HLE1BQU0sSUFBSUQ7SUFDaEIsTUFBTUUsV0FBV0gsZUFBZUksT0FBTyxLQUFLRixJQUFJRSxPQUFPO0lBQ3ZELE9BQU9EO0FBQ1Q7QUFFTyxlQUFlRSxnQkFBZ0JYLEtBQUs7SUFDekMsSUFBSTtRQUNGLElBQUlZLE1BQU0sTUFBTUMsTUFBTSxvQkFBb0I7WUFDeENDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFbEI7WUFBTTtRQUMvQjtRQUNBLElBQUksQ0FBQ1ksSUFBSU8sRUFBRSxFQUFFO1lBQ1hsQixhQUFhbUIsS0FBSztZQUNsQixPQUFPO1FBQ1Q7UUFDQVIsTUFBTSxNQUFNQSxJQUFJUyxJQUFJO1FBQ3BCLE9BQU87SUFDVCxFQUFFLE9BQU9DLEtBQUs7UUFDWkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi91dGlsL3Rva2VuLmpzP2YxN2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKCkge1xyXG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICBpZiAoIXRva2VuKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3QgdG9rZW5EdXJhdGlvbiA9IGdldEV4cGlyYXRpb25EYXRlKCk7XHJcbiAgaWYgKHRva2VuRHVyYXRpb24gPCAwKSB7XHJcbiAgICByZXR1cm4gXCJFWFBJUkVEXCI7XHJcbiAgfVxyXG4gIHJldHVybiB0b2tlbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGlyYXRpb25EYXRlKCkge1xyXG4gIGNvbnN0IHN0b3JlZEV4cGlyYXRpb25EYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uXCIpO1xyXG4gIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gbmV3IERhdGUoc3RvcmVkRXhwaXJhdGlvbkRhdGUpO1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZHVyYXRpb24gPSBleHBpcmF0aW9uRGF0ZS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpO1xyXG4gIHJldHVybiBkdXJhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzVG9rZW5WZXJpZmllZCh0b2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvdmVyaWZ5XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRva2VuIH0pLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICByZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgaW4gZmV0Y2hpbmcgL2FwaS9hdXRoL3ZlcmlmeVwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW5EdXJhdGlvbiIsImdldEV4cGlyYXRpb25EYXRlIiwic3RvcmVkRXhwaXJhdGlvbkRhdGUiLCJleHBpcmF0aW9uRGF0ZSIsIkRhdGUiLCJub3ciLCJkdXJhdGlvbiIsImdldFRpbWUiLCJpc1Rva2VuVmVyaWZpZWQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiY2xlYXIiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/token.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();