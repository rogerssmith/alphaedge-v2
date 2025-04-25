"use strict";
exports.id = 3454;
exports.ids = [3454];
exports.modules = {

/***/ 83454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CustomEmail */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_email_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73718);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46261);



const CustomEmail = (props)=>{
    const { username, message, company } = props;
    const updatedDate = new Date();
    const paragraphs = message.split("|");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Html, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Head, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Preview, {
                children: message
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Hi ",
                                            username,
                                            ","
                                        ]
                                    }),
                                    paragraphs.map((para)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            style: paragraph,
                                            children: para
                                        }, Math.random() + para)),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Still have questions? Please contact",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                href: company.baseUrl,
                                                style: link,
                                                children: [
                                                    " ",
                                                    company.name,
                                                    " Support"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_email_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        style: paragraph,
                                        children: [
                                            "Thanks,",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            company.name,
                                            " Support Team"
                                        ]
                                    })
                                ]
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
                                updatedDate?.getFullYear(),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomEmail);
const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";
const main = {
    backgroundColor: "#efeef1",
    fontFamily
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
const link = {
    textDecoration: "underline"
};


/***/ })

};
;