"use strict";
exports.id = 2778;
exports.ids = [2778];
exports.modules = {

/***/ 9890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22299);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);
// const winston = require("winston");

const { createLogger, format, transports } = (winston__WEBPACK_IMPORTED_MODULE_0___default());
const nextLogger = createLogger({
    level: "info",
    format: format.combine(format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }), format.json()),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: "error.log",
            level: "error"
        }),
        new transports.File({
            filename: "combined.log"
        })
    ]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nextLogger);


/***/ }),

/***/ 52778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4032);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9890);


const sendEmail = async (to, subject, text, html, company)=>{
    try {
        let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({
            host: company.emailSetup.host,
            port: company.emailSetup.port,
            secure: company.emailSetup.secure,
            auth: {
                user: company.emailSetup.auth.user,
                pass: company.emailSetup.auth.pass
            }
        });
        let info = await transporter.sendMail({
            from: company.emailSetup.from,
            to,
            subject,
            text,
            html
        });
        _logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.info(`Message sent: %s", ${info.messageId}`);
        return `"Message sent: %s", ${info.messageId})`;
    } catch ({ message }) {
        _logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.error(message);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendEmail); // const sendEmailText = async (
 //   to: string,
 //   subject: string,
 //   text: string,
 //   html: string,
 //   company: CompanyProps
 // ) => {
 //   try {
 //     let transporter = nodemailer.createTransport({
 //       host: "smtp.zoho.com",
 //       port: 465,
 //       secure: true,
 //       auth: {
 //         user: "Paywander@zohomail.com",
 //         pass: process.env.EMAIL_PASS,
 //       },
 //     });
 //     let info = await transporter.sendMail({
 //       from: '"paywander@zohomail.com"', // sender address
 //       to, // list of receivers
 //       subject, // Subject line
 //       text, // plain text body
 //       html, // html body
 //     });
 //     console.log("Message sent: %s", info.messageId);
 //     return `"Message sent: %s", ${info.messageId})`;
 //   } catch ({ message }: any) {
 //     throw new Error(message);
 //   }
 // };


/***/ })

};
;