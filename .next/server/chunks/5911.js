"use strict";
exports.id = 5911;
exports.ids = [5911];
exports.modules = {

/***/ 55911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    refUsername: {
        type: String,
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        default: "active"
    },
    avatar: {
        url: {
            type: String
        },
        public_id: {
            type: String
        },
        secure_url: {
            type: String
        },
        format: {
            type: String
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        bytes: {
            type: Number
        },
        original_filename: {
            type: String
        },
        created_at: {
            type: String
        },
        etag: {
            type: String
        },
        thumbnail_url: {
            type: String
        }
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    dateOfBirth: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        enum: [
            "admin",
            "user"
        ],
        default: "user"
    },
    manager: {
        type: String,
        enum: [
            "yes",
            "no"
        ],
        default: "no"
    },
    accountBalance: {
        type: Number,
        default: 0
    },
    loanBalance: {
        type: Number,
        default: 0
    },
    investBalance: {
        type: Number,
        default: 0
    },
    investProfitBalance: {
        type: Number,
        default: 0
    },
    investWithdrawableBalance: {
        type: Number,
        default: 0
    },
    accountVerified: {
        type: Boolean,
        default: false
    },
    accountVerifiedDocument: {
        url: {
            type: String
        },
        public_id: {
            type: String
        },
        secure_url: {
            type: String
        },
        format: {
            type: String
        },
        width: {
            type: Number
        },
        height: {
            type: Number
        },
        bytes: {
            type: Number
        },
        original_filename: {
            type: String
        },
        created_at: {
            type: String
        },
        etag: {
            type: String
        },
        thumbnail_url: {
            type: String
        }
    },
    recoveryCode: {
        type: String
    },
    recoveryCodeExpiry: {
        type: Number
    }
}, {
    timestamps: true
});
userSchema.index({
    email: 1
}, {
    unique: true
});
userSchema.index({
    username: 1
}, {
    unique: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("User", userSchema));


/***/ })

};
;