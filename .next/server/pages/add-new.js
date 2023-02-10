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
exports.id = "pages/add-new";
exports.ids = ["pages/add-new"];
exports.modules = {

/***/ "./pages/add-new/index.js":
/*!********************************!*\
  !*** ./pages/add-new/index.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst AddNew = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const resourceName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const jobCode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const taskDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const createdAt = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const createdEt = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const statusDetails = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    // submit data to the database\n    const createDetails = async (status)=>{\n        try {\n            if (resourceName.current.value === \"\" || jobCode.current.value === \"\" || taskDescription.current.value === \"\" || createdAt.current.value === \"\" || createdEt.current.value === \"\" || statusDetails.current.value === \"\") {\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.warning(\"All fields are required. Must provide valid data\");\n            } else {\n                const res = await fetch(\"/api/add-new\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        resourceName: resourceName.current.value,\n                        jobCode: jobCode.current.value,\n                        taskDescription: taskDescription.current.value,\n                        createdAt: createdAt.current.value,\n                        createdEt: createdEt.current.value,\n                        statusDetails: statusDetails.current.value\n                    })\n                });\n                const data = await res.json();\n                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(data.message);\n                router.push(\"/\");\n            }\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Something went wrong!\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main__container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"new__Details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"new__Details-header\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"new__Details-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bill__to\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form__group\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Resource Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            ref: resourceName\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form__group\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Job code\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            ref: jobCode\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form__group\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Task Description\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            ref: taskDescription\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form__group inline__form-group\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"inline__group\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"Start Date\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"date\",\n                                                    ref: createdAt\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"inline__group\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"End Date\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"date\",\n                                                    ref: createdEt\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form__group inline__form-group\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"inline__group\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Status\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                ref: statusDetails\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"new__Details__btns\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"edit__btn\",\n                                    onClick: ()=>router.push(\"/\"),\n                                    children: \"Discard\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"mark__as-btn\",\n                                        onClick: ()=>createDetails(\"Done\"),\n                                        children: \"Send & Save\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Jobs\\\\POC\\\\project\\\\pages\\\\add-new\\\\index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddNew);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7cURBQ2pDOzs7Ozs7NkNBQ0Y7OENBQ04sOERBQUNvQixLQUFHO29DQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOzhDQUM3Qyw0RUFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGVBQWU7OzBEQUM1Qiw4REFBQ0UsR0FBQzswREFBQyxRQUFNOzs7Ozt5REFBSTswREFDYiw4REFBQ0MsT0FBSztnREFBQ0MsSUFBSSxFQUFDLE1BQU07Z0RBQUNDLEdBQUcsRUFBRXpCLGFBQWE7Ozs7O3lEQUFJOzs7Ozs7aURBQ3JDOzs7Ozs2Q0FDRjs7Ozs7O3FDQUNGO3NDQUVOLDhEQUFDbUIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLG9CQUFvQjs7OENBQ2pDLDhEQUFDTSxRQUFNO29DQUFDTixTQUFTLEVBQUMsV0FBVztvQ0FBQ08sT0FBTyxFQUFFLElBQU1uQyxNQUFNLENBQUN5QixJQUFJLENBQUMsR0FBRyxDQUFDOzhDQUFFLFNBRS9EOzs7Ozs2Q0FBUzs4Q0FDVCw4REFBQ0UsS0FBRzs4Q0FDRiw0RUFBQ08sUUFBTTt3Q0FDTE4sU0FBUyxFQUFDLGNBQWM7d0NBQ3hCTyxPQUFPLEVBQUUsSUFBTTFCLGFBQWEsQ0FBQyxNQUFNLENBQUM7a0RBQ3JDLGFBRUQ7Ozs7O2lEQUFTOzs7Ozs2Q0FDTDs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjs7Ozs7aUJBQ0YsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZVYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay8uL3BhZ2VzL2FkZC1uZXcvaW5kZXguanM/N2RhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IEFkZE5ldyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByZXNvdXJjZU5hbWUgPSB1c2VSZWYoXCJcIik7XHJcbiAgY29uc3Qgam9iQ29kZSA9IHVzZVJlZihcIlwiKTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB1c2VSZWYoXCJcIik7XHJcbiAgY29uc3QgY3JlYXRlZEF0ID0gdXNlUmVmKFwiXCIpO1xyXG4gIGNvbnN0IGNyZWF0ZWRFdCA9IHVzZVJlZihcIlwiKTtcclxuICBjb25zdCBzdGF0dXNEZXRhaWxzID0gdXNlUmVmKFwiXCIpO1xyXG5cclxuICBcclxuICAvLyBzdWJtaXQgZGF0YSB0byB0aGUgZGF0YWJhc2VcclxuICBjb25zdCBjcmVhdGVEZXRhaWxzID0gYXN5bmMgKHN0YXR1cykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHJlc291cmNlTmFtZS5jdXJyZW50LnZhbHVlID09PSBcIlwiIHx8XHJcbiAgICAgICAgam9iQ29kZS5jdXJyZW50LnZhbHVlID09PSBcIlwiIHx8XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmN1cnJlbnQudmFsdWUgPT09IFwiXCIgfHxcclxuICAgICAgICBjcmVhdGVkQXQuY3VycmVudC52YWx1ZSA9PT0gXCJcIiB8fFxyXG4gICAgICAgIGNyZWF0ZWRFdC5jdXJyZW50LnZhbHVlID09PSBcIlwiIHx8XHJcbiAgICAgICAgc3RhdHVzRGV0YWlscy5jdXJyZW50LnZhbHVlID09PSBcIlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRvYXN0Lndhcm5pbmcoXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZC4gTXVzdCBwcm92aWRlIHZhbGlkIGRhdGFcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2FkZC1uZXdcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU6IHJlc291cmNlTmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICBqb2JDb2RlOiBqb2JDb2RlLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHRhc2tEZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogY3JlYXRlZEF0LmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGNyZWF0ZWRFdDogY3JlYXRlZEV0LmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHN0YXR1c0RldGFpbHM6IHN0YXR1c0RldGFpbHMuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICB0b2FzdC5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdfX0RldGFpbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld19fRGV0YWlscy1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMz5UYXNrPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld19fRGV0YWlscy1ib2R5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpbGxfX3RvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8cD5SZXNvdXJjZSBOYW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17cmVzb3VyY2VOYW1lfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8cD5Kb2IgY29kZTwvcD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9e2pvYkNvZGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxwPlRhc2sgRGVzY3JpcHRpb248L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXt0YXNrRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cCBpbmxpbmVfX2Zvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZV9fZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxwPlN0YXJ0IERhdGU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiByZWY9e2NyZWF0ZWRBdH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZV9fZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxwPkVuZCBEYXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgcmVmPXtjcmVhdGVkRXR9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwIGlubGluZV9fZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lX19ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+U3RhdHVzPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtzdGF0dXNEZXRhaWxzfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld19fRGV0YWlsc19fYnRuc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImVkaXRfX2J0blwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAgICAgICAgRGlzY2FyZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrX19hcy1idG5cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY3JlYXRlRGV0YWlscyhcIkRvbmVcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2VuZCAmIFNhdmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsInRvYXN0IiwiQWRkTmV3Iiwicm91dGVyIiwiaXRlbXMiLCJzZXRJdGVtcyIsInJlc291cmNlTmFtZSIsImpvYkNvZGUiLCJ0YXNrRGVzY3JpcHRpb24iLCJjcmVhdGVkQXQiLCJjcmVhdGVkRXQiLCJzdGF0dXNEZXRhaWxzIiwiY3JlYXRlRGV0YWlscyIsInN0YXR1cyIsImN1cnJlbnQiLCJ2YWx1ZSIsIndhcm5pbmciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInAiLCJpbnB1dCIsInR5cGUiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/add-new/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/add-new/index.js"));
module.exports = __webpack_exports__;

})();