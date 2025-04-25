"use strict";
exports.id = 5472;
exports.ids = [5472];
exports.modules = {

/***/ 53820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatNumber = (number)=>{
    return number.toLocaleString("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNumber);


/***/ }),

/***/ 95472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export TransactionEmail */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53820);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46261);
// import formatNumber from "@/constants/formatNumber";




const TransactionEmail = (props)=>{
    const { transaction, description, fullname, company } = props;
    const formattedDate = new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "medium"
    }).format(transaction?.createdAt);
    if (!transaction) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Head, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Preview, {
                children: "No Transaction"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Body, {
                style: main,
                children: "Nothing to see here"
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Head, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Preview, {
                children: transaction?.title || "New Transaction"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Body, {
                style: main,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Container, {
                        style: container,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                                style: logo,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Img, {
                                    style: {
                                        margin: "0 auto"
                                    },
                                    src: company.logo.url,
                                    width: "auto",
                                    height: "60",
                                    alt: company.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                                style: sectionsBorders,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Column, {
                                            style: sectionBorder
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Column, {
                                            style: sectionCenter
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Column, {
                                            style: sectionBorder
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                                style: content,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                        style: heading,
                                        children: [
                                            "Dear ",
                                            fullname,
                                            ","
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                        style: {
                                            ...subHeading,
                                            color: company.color.primaryVeryLight
                                        },
                                        children: description
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            transaction.title,
                                            ":",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(transaction.amount)
                                                ]
                                            })
                                        ]
                                    }),
                                    (transaction.pendingBalance || transaction.pendingBalance === 0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Pending balance:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(transaction.pendingBalance)
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.senderName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Sender:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.senderName
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.receiverName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Reciever:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.receiverName
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.coinName && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Coin Name:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.coinName
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.walletAddress && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Wallet Address:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.walletAddress
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.receiverPaymentUsername && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Receiver's ",
                                            transaction.paymentTitle,
                                            " Username:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.receiverPaymentUsername
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.receiverEmail && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Receiver's email",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.receiverEmail
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.receiverPhoneNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Receiver's Phone Number:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.receiverPhoneNumber
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.receiverAccountNumber && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Receiver's Account Number:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.receiverAccountNumber
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.status && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Status:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.status
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.amountToDeposit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Amount to deposit:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(transaction.amountToDeposit)
                                                ]
                                            })
                                        ]
                                    }),
                                    (transaction.despositedAmount || transaction.despositedAmount === 0) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Deposited amount so far:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(transaction.despositedAmount)
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.loanReason && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Loan Reason:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.loanReason
                                                ]
                                            })
                                        ]
                                    }),
                                    transaction.loanDuration && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Loan Duration:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    transaction.loanDuration
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Initial Date:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    formattedDate
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                                style: btnContainer,
                                children: [
                                    transaction.category === "money-received" && transaction.status === "pending" && transaction.amountToDeposit && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: {
                                            ...paragraph,
                                            padding: "0px 10px 0px 10px"
                                        },
                                        children: [
                                            "First, you need to make a deposit of",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(transaction.amountToDeposit)
                                                ]
                                            }),
                                            " ",
                                            "into your",
                                            company.name,
                                            " account. If you're confused on why you should deposit",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(transaction.amountToDeposit)
                                                ]
                                            }),
                                            ", click on the button below to view full details."
                                        ]
                                    }),
                                    transaction.category === "deposit" && transaction.type === "manual-coin-payment" && (transaction.status === "action-needed" || transaction.status === "processing" || transaction.status === "rejected") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: {
                                            ...paragraph,
                                            padding: "0px 10px 0px 10px"
                                        },
                                        children: "Remember to Upload the Proof of payment after deposit. Click on the button below for more details."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        pX: 12,
                                        pY: 12,
                                        style: {
                                            ...button,
                                            backgroundColor: company.color.primary
                                        },
                                        href: `${company.baseUrl}/transaction-info/${transaction._id}`,
                                        children: "View Transaction"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                                style: content,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    style: paragraph,
                                    children: [
                                        "Thanks, ",
                                        company.name,
                                        " Finance Team"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                        style: footer,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            style: {
                                textAlign: "center",
                                color: "#706a7b"
                            },
                            children: [
                                "\xa9 ",
                                transaction?.createdAt?.getFullYear(),
                                " ",
                                company.name,
                                ", All Rights Reserved ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "408 Warren Rd - San Mateo, CA 94402"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionEmail);
const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
const main = {
    backgroundColor: "#efeef1",
    fontFamily
};
const heading = {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px 0 10px 0"
};
const subHeading = {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px 5px 10px 5px"
};
const paragraph = {
    lineHeight: 1.5,
    fontSize: 14
};
const container = {
    width: "580px",
    margin: "30px auto",
    backgroundColor: "#ffffff"
};
const footer = {
    width: "580px",
    margin: "0 auto"
};
const content = {
    padding: "5px 25px 10px 25px"
};
const logo = {
    padding: 10,
    width: "100%"
};
const sectionsBorders = {
    width: "100%",
    display: "flex"
};
const sectionBorder = {
    borderBottom: "1px solid rgb(238,238,238)",
    width: "249px"
};
const sectionCenter = {
    borderBottom: "1px solid #f43f5e",
    width: "102px"
};
const btnContainer = {
    textAlign: "center"
};
const button = {
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block"
};
const link = {
    textDecoration: "underline"
};


/***/ })

};
;