"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    const { taskId  } = req.query;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://admin:admin@cluster0.8rv8cqp.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    });
    const db = client.db();
    const collection = db.collection("TaskDetails");
    if (req.method === "PUT") {
        await collection.updateOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(taskId)
        }, {
            $set: {
                status: "Done"
            }
        });
        res.status(200).json({
            message: "Task Done"
        });
        client.close();
    }
    //   delete request
    if (req.method === "DELETE") {
        await collection.deleteOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(taskId)
        });
        res.status(200).json({
            message: "Task deleted successfully"
        });
        client.close();
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(877));
module.exports = __webpack_exports__;

})();