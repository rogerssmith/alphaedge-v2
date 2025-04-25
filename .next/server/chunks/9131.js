"use strict";
exports.id = 9131;
exports.ids = [9131];
exports.modules = {

/***/ 69131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const transactionSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,
        required: true
    },
    senderName: {
        type: String
    },
    receiverName: {
        type: String
    },
    receiverEmail: {
        type: String
    },
    receiverPhoneNumber: {
        type: String
    },
    receiverAccountNumber: {
        type: String
    },
    receiverPaymentUsername: {
        type: String
    },
    note: String,
    amountToDeposit: Number,
    despositedAmount: Number,
    pendingBalance: Number,
    paymentTitle: {
        type: String
    },
    paymentProof: {
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
    automaticCoinPayment: {
        payment_id: {
            type: String
        },
        payment_status: {
            type: String
        },
        pay_address: {
            type: String
        },
        price_amount: {
            type: Number
        },
        price_currency: {
            type: String
        },
        pay_amount: {
            type: Number
        },
        pay_currency: {
            type: String
        },
        order_id: {
            type: String
        },
        order_description: {
            type: String
        },
        ipn_callback_url: {
            type: String
        },
        created_at: {
            type: Date
        },
        updated_at: {
            type: Date
        },
        purchase_id: {
            type: String
        },
        amount_received: {
            type: Number
        },
        payin_extra_id: {
            type: String
        },
        smart_contract: {
            type: String
        },
        network: {
            type: String
        },
        network_precision: {
            type: String
        },
        time_limit: {
            type: Date
        },
        expiration_estimate_date: {
            type: Date
        },
        is_fixed_rate: {
            type: String
        },
        valid_until: {
            type: Date
        },
        type: {
            type: String
        }
    },
    linkedTransactionId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId
    },
    loanDuration: {
        type: String
    },
    loanReason: String,
    loanDurationDate: {
        type: Number
    },
    status: {
        type: String,
        required: true,
        enum: [
            "successful",
            "pending",
            "processing",
            "action-needed",
            "rejected"
        ]
    },
    category: {
        type: String,
        required: true,
        enum: [
            "money-received",
            "transfer",
            "deposit",
            "loan",
            "investment-topup",
            "investment-withdrawal"
        ]
    },
    type: {
        type: String,
        enum: [
            "automatic-coin-payment",
            "manual-coin-payment",
            "bank-transfer"
        ]
    },
    walletAddress: {
        type: String,
        trim: true
    },
    coinName: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Transaction || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Transaction", transactionSchema));


/***/ })

};
;