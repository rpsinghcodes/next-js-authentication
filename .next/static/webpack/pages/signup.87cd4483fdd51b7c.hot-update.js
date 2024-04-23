"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup/index.js":
/*!*******************************!*\
  !*** ./pages/signup/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SignUpPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleFormData = async (event)=>{\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        const username = formData.get(\"username\");\n        const password = formData.get(\"password\");\n        const response = await fetch(\"/api/auth/signup\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username,\n                password\n            })\n        });\n        const result = await response.json();\n        if (response.ok) {\n            console.log(result);\n            router.push(\"/\");\n        } else {\n            alert(result.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleFormData,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"username\",\n                    children: \"Enter UserName\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"username\",\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"password\",\n                    children: \"Enter Password\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                name: \"password\"\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\DevelopMent\\\\Advance React Projects\\\\next-js\\\\pages-router-practise project\\\\pages\\\\signup\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUpPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SignUpPage;\nvar _c;\n$RefreshReg$(_c, \"SignUpPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUV6QixTQUFTQzs7SUFDcEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQzFCLE1BQU1HLGlCQUFpQixPQUFPQztRQUM1QkEsTUFBTUMsY0FBYztRQUNwQixNQUFNQyxXQUFXLElBQUlDLFNBQVNILE1BQU1JLGFBQWE7UUFDakQsTUFBTUMsV0FBV0gsU0FBU0ksR0FBRyxDQUFDO1FBQzlCLE1BQU1DLFdBQVdMLFNBQVNJLEdBQUcsQ0FBQztRQUU5QixNQUFNRSxXQUFXLE1BQU1DLE1BQU0sb0JBQW9CO1lBQzdDQyxRQUFPO1lBQ1BDLFNBQVM7Z0JBQUMsZ0JBQWdCO1lBQWtCO1lBQzVDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUNUO2dCQUFVRTtZQUFRO1FBQzVDO1FBQ0EsTUFBTVEsU0FBUyxNQUFNUCxTQUFTUSxJQUFJO1FBRWxDLElBQUdSLFNBQVNTLEVBQUUsRUFBRTtZQUNaQyxRQUFRQyxHQUFHLENBQUNKO1lBQ1pqQixPQUFPc0IsSUFBSSxDQUFDO1FBQ2hCLE9BQU87WUFDSEMsTUFBTU4sT0FBT08sT0FBTztRQUN4QjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVV6Qjs7MEJBQ2QsOERBQUMwQjswQkFDQyw0RUFBQ0M7b0JBQU1DLFNBQVE7OEJBQVc7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLE1BQUs7Z0JBQVdDLFFBQVE7Ozs7OzswQkFDM0MsOERBQUNOOzBCQUNDLDRFQUFDQztvQkFBTUMsU0FBUTs4QkFBVzs7Ozs7Ozs7Ozs7MEJBRzVCLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBV0MsTUFBSzs7Ozs7OzBCQUM1Qiw4REFBQ0U7Ozs7OzBCQUNELDhEQUFDQztnQkFBT0osTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVCO0dBdEN3QmhDOztRQUNMRCxrREFBU0E7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAvaW5kZXguanM/MjExMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcFBhZ2UoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGhhbmRsZUZvcm1EYXRhID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGZvcm1EYXRhLmdldChcInVzZXJuYW1lXCIpO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvc2lnbnVwJywge1xyXG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3VzZXJuYW1lLCBwYXNzd29yZH0pXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KHJlc3VsdC5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybURhdGF9PlxyXG4gICAgICA8cD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+RW50ZXIgVXNlck5hbWU8L2xhYmVsPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICA8cD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+RW50ZXIgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlNpZ25VcFBhZ2UiLCJyb3V0ZXIiLCJoYW5kbGVGb3JtRGF0YSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsInVzZXJuYW1lIiwiZ2V0IiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsIm9rIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJhbGVydCIsIm1lc3NhZ2UiLCJmb3JtIiwib25TdWJtaXQiLCJwIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInJlcXVpcmVkIiwiYnIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup/index.js\n"));

/***/ })

});