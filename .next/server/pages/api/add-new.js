"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://admin:admin@cluster0.8rv8cqp.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    });
    if (req.method === "POST") {
        const details = {
            resourceName: req.body.resourceName,
            jobCode: req.body.jobCode,
            taskDescription: req.body.taskDescription,
            createdAt: req.body.createdAt,
            createdEt: req.body.createdEt,
            statusDetails: req.body.statusDetails
        };
        const db = client.db();
        const collection = db.collection("TaskDetails");
        await collection.insertOne(details);
        res.status(200).json({
            message: "Task added successfully"
        });
        client.close();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2714));
module.exports = __webpack_exports__;

})();