"use strict";
(() => {
var exports = {};
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 8859:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
react_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const EditItem = (props)=>{
    const task = props.data;
    //console("props.data", props.data)
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // const [items, setItems] = useState(task.items);
    const { 0: resourceName , 1: setresourceName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: jobCode , 1: setjobCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: taskDescription , 1: settaskDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: createdAt , 1: setcreatedAt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: createdEt , 1: setcreatedEt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: statusDetails , 1: setstatusDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // update task in database
    const updatetask = async (taskId, status)=>{
        try {
            const res = await fetch(`/api/edit/${taskId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    resourceName: resourceName,
                    jobCode: jobCode,
                    TaskDescription: taskDescription,
                    createdAt: createdAt,
                    createdEt: createdEt,
                    statusDetails: statusDetails
                })
            });
            const data = await res.json();
            //console.log("data", data)
            router.push(`/details/${taskId}`);
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(data.message);
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Something went wrong!");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setresourceName(task.resourceName);
        setjobCode(task.jobCode);
        settaskDescription(task.settaskDescription);
        setcreatedAt(task.createdAt);
        setcreatedEt(task.createdEt);
        setstatusDetails(task.statusDetails);
    }, [
        task
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "main__container",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "new__Details",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "new__Details-header",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Edit"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "new__Details-body",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bill__to",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form__group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Resource Name"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: resourceName,
                                            onChange: (e)=>setresourceName(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form__group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Job code"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: jobCode,
                                            onChange: (e)=>setjobCode(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form__group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Task Description"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: taskDescription,
                                            onChange: (e)=>settaskDescription(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form__group inline__form-group",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inline__group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "Start Date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "date",
                                                    value: createdAt,
                                                    onChange: (e)=>setcreatedAt(e.target.value)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "inline__group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "End Date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "date",
                                                    value: createdEt,
                                                    onChange: (e)=>setcreatedEt(e.target.value)
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "form__group inline__form-group",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "inline__group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: statusDetails,
                                                onChange: (e)=>setstatusDetails(e.target.value)
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "new__Details__btns",
                            style: {
                                justifyContent: "end"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "draft__btn",
                                        onClick: ()=>router.push(`/details/${task.id}`),
                                        children: "Cancel"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "mark__as-btn",
                                        onClick: ()=>updatetask(task.id, task.status),
                                        children: "Save Changes"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditItem);
async function getStaticPaths() {
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(`mongodb+srv://admin:admin@cluster0.8rv8cqp.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    });
    const db = client.db();
    const collection = db.collection("TaskDetails");
    const details = await collection.find({}, {
        _id: 1
    }).toArray();
    return {
        fallback: "blocking",
        paths: details.map((task)=>({
                params: {
                    taskId: task._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const { taskId  } = context.params;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(`mongodb+srv://admin:admin@cluster0.8rv8cqp.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true
    });
    const db = client.db();
    const collection = db.collection("TaskDetails");
    const task = await collection.findOne({
        _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_3__.ObjectId)(taskId)
    });
    return {
        props: {
            data: {
                id: task._id.toString(),
                resourceName: task.resourceName,
                jobCode: task.jobCode,
                taskDescription: task.taskDescription,
                createdAt: task.createdAt,
                createdEt: task.createdEt,
                statusDetails: task.statusDetails
            }
        },
        revalidate: 1
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8859));
module.exports = __webpack_exports__;

})();