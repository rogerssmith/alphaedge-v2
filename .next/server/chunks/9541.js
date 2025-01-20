"use strict";
exports.id = 9541;
exports.ids = [9541];
exports.modules = {

/***/ 69985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const investmentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    planName: {
        type: String,
        required: true
    },
    amountInvested: {
        type: Number,
        required: true
    },
    ROIReceived: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        required: true
    },
    ROIDaily: {
        type: Number,
        required: true
    },
    totalROI: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            "active",
            "completed"
        ],
        default: "active"
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Investment || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Investment", investmentSchema));


/***/ }),

/***/ 73972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const returnSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    investmentId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Return || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Return", returnSchema));


/***/ })

};
;