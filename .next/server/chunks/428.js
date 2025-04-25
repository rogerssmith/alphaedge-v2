"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const cardSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    cardNumber: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    expireDate: {
        type: String,
        trim: true,
        required: true
    },
    cvc: {
        type: String,
        trim: true,
        required: true,
        index: {
            unique: true
        }
    },
    cardholderName: {
        type: String,
        trim: true,
        required: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    zipCode: {
        type: String,
        trim: true,
        required: true
    },
    userId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Card || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Card", cardSchema));


/***/ })

};
;