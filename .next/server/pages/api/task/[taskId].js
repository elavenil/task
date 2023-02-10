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
exports.id = "pages/api/task/[taskId]";
exports.ids = ["pages/api/task/[taskId]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/task/[taskId]/index.js":
/*!******************************************!*\
  !*** ./pages/api/task/[taskId]/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const { taskId  } = req.query;\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`, {\n        useNewUrlParser: true\n    });\n    const db = client.db();\n    const collection = db.collection(\"TaskDetails\");\n    if (req.method === \"PUT\") {\n        await collection.updateOne({\n            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(taskId)\n        }, {\n            $set: {\n                status: \"Done\"\n            }\n        });\n        res.status(200).json({\n            message: \"Task Done\"\n        });\n        client.close();\n    }\n    //   delete request\n    if (req.method === \"DELETE\") {\n        await collection.deleteOne({\n            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(taskId)\n        });\n        res.status(200).json({\n            message: \"Task deleted successfully\"\n        });\n        client.close();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGFzay9bdGFza0lkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFFNUIsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUN0QyxDQUFDLDhGQUE4RixDQUFDLEVBQ2hHO1FBQUVTLGVBQWUsRUFBRSxJQUFJO0tBQUUsQ0FDMUI7SUFFRCxNQUFNQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLFVBQVUsR0FBR0QsRUFBRSxDQUFDQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBRS9DLElBQUlSLEdBQUcsQ0FBQ1MsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixNQUFNRCxVQUFVLENBQUNFLFNBQVMsQ0FDeEI7WUFBRUMsR0FBRyxFQUFFYixpREFBUSxDQUFDSSxNQUFNLENBQUM7U0FBRSxFQUN6QjtZQUNFVSxJQUFJLEVBQUU7Z0JBQ0pDLE1BQU0sRUFBRSxNQUFNO2FBQ2Y7U0FDRixDQUNGLENBQUM7UUFFRlosR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsV0FBVztTQUFFLENBQUMsQ0FBQztRQUMvQ1gsTUFBTSxDQUFDWSxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLElBQUloQixHQUFHLENBQUNTLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDM0IsTUFBTUQsVUFBVSxDQUFDUyxTQUFTLENBQUM7WUFBRU4sR0FBRyxFQUFFYixpREFBUSxDQUFDSSxNQUFNLENBQUM7U0FBRSxDQUFDLENBQUM7UUFFdERELEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDJCQUEyQjtTQUFFLENBQUMsQ0FBQztRQUMvRFgsTUFBTSxDQUFDWSxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlakIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzay8uL3BhZ2VzL2FwaS90YXNrL1t0YXNrSWRdL2luZGV4LmpzP2MzZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB7IHRhc2tJZCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgYG1vbmdvZGIrc3J2Oi8vYWRtaW46T2FXb0czRldxSm9hT1dTRUBjbHVzdGVyMC5jYXMyc2ljLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgLFxyXG4gICAgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJUYXNrRGV0YWlsc1wiKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIGF3YWl0IGNvbGxlY3Rpb24udXBkYXRlT25lKFxyXG4gICAgICB7IF9pZDogT2JqZWN0SWQodGFza0lkKSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgJHNldDoge1xyXG4gICAgICAgICAgc3RhdHVzOiBcIkRvbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogXCJUYXNrIERvbmVcIiB9KTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gICBkZWxldGUgcmVxdWVzdFxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIkRFTEVURVwiKSB7XHJcbiAgICBhd2FpdCBjb2xsZWN0aW9uLmRlbGV0ZU9uZSh7IF9pZDogT2JqZWN0SWQodGFza0lkKSB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiVGFzayBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJPYmplY3RJZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0YXNrSWQiLCJxdWVyeSIsImNsaWVudCIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJkYiIsImNvbGxlY3Rpb24iLCJtZXRob2QiLCJ1cGRhdGVPbmUiLCJfaWQiLCIkc2V0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjbG9zZSIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/task/[taskId]/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/task/[taskId]/index.js"));
module.exports = __webpack_exports__;

})();