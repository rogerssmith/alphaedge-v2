"use strict";
exports.id = 4637;
exports.ids = [4637];
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

/***/ 84637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ReturnsEmail */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53820);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46261);
// import formatNumber from "@/constants/formatNumber";




const ReturnsEmail = (props)=>{
    const { planName, profitAmount, fullname, totalProfit, investmentId, company } = props;
    const formattedDate = new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "medium"
    }).format(new Date());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Head, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Preview, {
                children: `New Return on your ${planName}`
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                        style: {
                                            ...subHeading,
                                            color: company.color.primaryVeryLight
                                        },
                                        children: [
                                            "You have a new return in your ",
                                            planName,
                                            " investment"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Profit received:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    company.currency.symbol,
                                                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(profitAmount || 0)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Plan Name:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    planName
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Total Profit so far:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    " ",
                                                    company.currency.symbol,
                                                    totalProfit
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Date:",
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Section, {
                                style: btnContainer,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    pX: 12,
                                    pY: 12,
                                    style: {
                                        ...button,
                                        backgroundColor: company.color.primary
                                    },
                                    href: `${company.baseUrl}/home/invest-and-earn/${investmentId}`,
                                    children: "View Details"
                                })
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
                                new Date().getFullYear(),
                                " ",
                                company.name,
                                ", All Rights Reserved",
                                " ",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReturnsEmail);
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