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
exports.id = "pages/api/add-new";
exports.ids = ["pages/api/add-new"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/add-new/index.js":
/*!************************************!*\
  !*** ./pages/api/add-new/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`, {\n        useNewUrlParser: true\n    });\n    if (req.method === \"POST\") {\n        const details = {\n            resourceName: req.body.resourceName,\n            jobCode: req.body.jobCode,\n            taskDescription: req.body.taskDescription,\n            createdAt: req.body.createdAt,\n            createdEt: req.body.createdEt,\n            statusDetails: req.body.statusDetails\n        };\n        const db = client.db();\n        const collection = db.collection(\"TaskDetails\");\n        await collection.insertOne(details);\n        res.status(200).json({\n            message: \"Task added successfully\"\n        });\n        client.close();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkLW5ldy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixNQUFNQyxNQUFNLEdBQUcsTUFBTUosd0RBQW1CLENBQ3RDLENBQUMsOEZBQThGLENBQUMsRUFDaEc7UUFBRU0sZUFBZSxFQUFFLElBQUk7S0FBRSxDQUMxQjtJQUVELElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxPQUFPLEdBQUc7WUFDZEMsWUFBWSxFQUFFUCxHQUFHLENBQUNRLElBQUksQ0FBQ0QsWUFBWTtZQUNuQ0UsT0FBTyxFQUFFVCxHQUFHLENBQUNRLElBQUksQ0FBQ0MsT0FBTztZQUN6QkMsZUFBZSxFQUFFVixHQUFHLENBQUNRLElBQUksQ0FBQ0UsZUFBZTtZQUN6Q0MsU0FBUyxFQUFFWCxHQUFHLENBQUNRLElBQUksQ0FBQ0csU0FBUztZQUM3QkMsU0FBUyxFQUFFWixHQUFHLENBQUNRLElBQUksQ0FBQ0ksU0FBUztZQUM3QkMsYUFBYSxFQUFFYixHQUFHLENBQUNRLElBQUksQ0FBQ0ssYUFBYTtTQUN0QztRQUVELE1BQU1DLEVBQUUsR0FBR1osTUFBTSxDQUFDWSxFQUFFLEVBQUU7UUFDdEIsTUFBTUMsVUFBVSxHQUFHRCxFQUFFLENBQUNDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDL0MsTUFBTUEsVUFBVSxDQUFDQyxTQUFTLENBQUNWLE9BQU8sQ0FBQyxDQUFDO1FBRXBDTCxHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUseUJBQXlCO1NBQUUsQ0FBQyxDQUFDO1FBRTdEakIsTUFBTSxDQUFDa0IsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZXJCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2svLi9wYWdlcy9hcGkvYWRkLW5ldy9pbmRleC5qcz85NjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgYG1vbmdvZGIrc3J2Oi8vYWRtaW46T2FXb0czRldxSm9hT1dTRUBjbHVzdGVyMC5jYXMyc2ljLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgLFxyXG4gICAgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgfVxyXG4gICk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZGV0YWlscyA9IHtcclxuICAgICAgcmVzb3VyY2VOYW1lOiByZXEuYm9keS5yZXNvdXJjZU5hbWUsXHJcbiAgICAgIGpvYkNvZGU6IHJlcS5ib2R5LmpvYkNvZGUsXHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbjogcmVxLmJvZHkudGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICBjcmVhdGVkQXQ6IHJlcS5ib2R5LmNyZWF0ZWRBdCxcclxuICAgICAgY3JlYXRlZEV0OiByZXEuYm9keS5jcmVhdGVkRXQsXHJcbiAgICAgIHN0YXR1c0RldGFpbHM6IHJlcS5ib2R5LnN0YXR1c0RldGFpbHMsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIlRhc2tEZXRhaWxzXCIpO1xyXG4gICAgYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUoZGV0YWlscyk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlRhc2sgYWRkZWQgc3VjY2Vzc2Z1bGx5XCIgfSk7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsIm1ldGhvZCIsImRldGFpbHMiLCJyZXNvdXJjZU5hbWUiLCJib2R5Iiwiam9iQ29kZSIsInRhc2tEZXNjcmlwdGlvbiIsImNyZWF0ZWRBdCIsImNyZWF0ZWRFdCIsInN0YXR1c0RldGFpbHMiLCJkYiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/add-new/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/add-new/index.js"));
module.exports = __webpack_exports__;

})();