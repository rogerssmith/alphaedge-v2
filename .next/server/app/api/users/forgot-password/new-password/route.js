(() => {
var exports = {};
exports.id = 6194;
exports.ids = [6194];
exports.modules = {

/***/ 67096:
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ 11185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 50852:
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 17578:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 69865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/users/forgot-password/new-password/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(45050);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(71910);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/mongoose.ts
var mongoose = __webpack_require__(45506);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(67096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./node_modules/@react-email/render/dist/index.js
var dist = __webpack_require__(74449);
// EXTERNAL MODULE: ./constants/sendEmail.ts
var sendEmail = __webpack_require__(52778);
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@react-email/components/dist/index.mjs
var components_dist = __webpack_require__(73718);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./email-templates/PasswordUpdatedEmail.tsx



const PasswordUpdated = (props)=>{
    const { username, updatedDate, company } = props;
    const formattedDate = new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "medium"
    }).format(updatedDate);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Head, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Preview, {
                children: [
                    "You updated the password for your ",
                    company.name,
                    " account"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Body, {
                style: main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Container, {
                        style: container,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Section, {
                                style: logo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Img, {
                                    style: {
                                        margin: "0 auto"
                                    },
                                    src: company.logo.url,
                                    width: "auto",
                                    height: "60",
                                    alt: company.name
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Section, {
                                style: sectionsBorders,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Row, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Column, {
                                            style: sectionBorder
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Column, {
                                            style: sectionCenter
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Column, {
                                            style: sectionBorder
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Section, {
                                style: content,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                        style: paragraph,
                                        children: [
                                            "Hi ",
                                            username,
                                            ","
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                        style: paragraph,
                                        children: [
                                            "You updated the password for your ",
                                            company.name,
                                            " account on",
                                            " ",
                                            formattedDate,
                                            ". If this was you, then no further action is required."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                        style: paragraph,
                                        children: [
                                            "However if you did NOT perform this password change, please",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Link, {
                                                href: `${company.baseUrl}/forgot-password`,
                                                style: PasswordUpdatedEmail_link,
                                                children: [
                                                    " ",
                                                    "reset your account password"
                                                ]
                                            }),
                                            " ",
                                            "immediately."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                        style: paragraph,
                                        children: [
                                            "Remember to use a password that is both strong and unique to your",
                                            company.name,
                                            " account. To learn more about how to create a strong and unique password,",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Link, {
                                                href: company.baseUrl,
                                                style: PasswordUpdatedEmail_link,
                                                children: [
                                                    " ",
                                                    "click here."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                        style: paragraph,
                                        children: [
                                            "Still have questions? Please contact",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Link, {
                                                href: company.baseUrl,
                                                style: PasswordUpdatedEmail_link,
                                                children: [
                                                    " ",
                                                    company.name,
                                                    " Support"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                        style: paragraph,
                                        children: [
                                            "Thanks,",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            company.name,
                                            " Support Team"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Section, {
                        style: footer,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
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
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "408 Warren Rd - San Mateo, CA 94402"
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const PasswordUpdatedEmail = (PasswordUpdated);
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
const PasswordUpdatedEmail_link = {
    textDecoration: "underline"
};

;// CONCATENATED MODULE: ./constants/formatDate.ts
const formatDate = (date)=>{
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        year: "2-digit"
    }).format(date);
    return formattedDate;
};
/* harmony default export */ const constants_formatDate = (formatDate);

// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/api/users/forgot-password/new-password/route.ts









// Protectected route for user
const POST = async (request)=>{
    try {
        await (0,mongoose/* default */.Z)();
        //code logic
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const { newPassword, otp, email } = await request.json();
        const user = await User/* default */.Z.findOne({
            email
        });
        if (!user) throw new Error("No user found");
        if (user.recoveryCode !== otp) throw new Error("Invalid code");
        if (Date.now() > user.recoveryCodeExpiry) throw new Error("The code you entered is expired");
        const hashedPassword = external_bcrypt_default().hashSync(newPassword, 12);
        const updatedUser = await User/* default */.Z.findOneAndUpdate({
            email
        }, {
            password: hashedPassword
        });
        if (!updatedUser) throw new Error("No user found to update");
        const updatedDate = new Date();
        const emailText = ` You updated the password for your Paywander account on 
${constants_formatDate(updatedDate)}. If this was you, then no further action is
required. However if you did NOT perform this password change, please reset your account 
password immediately.: ${company.baseUrl}/forgot-password 

Remember to use a password that is both strong and unique to your
Paywander account. To learn more about how to create a strong and 
unique password, click here.: ${company.baseUrl}.`;
        const emailHtml = (0,dist.render)(PasswordUpdatedEmail({
            username: `${updatedUser.fullname}(${updatedUser.username})`,
            updatedDate,
            company
        }));
        const result = await (0,sendEmail/* default */.Z)(updatedUser.email, "Password Changed", emailText, emailHtml, company);
        return next_response/* default */.Z.json(result);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2Fforgot-password%2Fnew-password%2Froute&name=app%2Fapi%2Fusers%2Fforgot-password%2Fnew-password%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot-password%2Fnew-password%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fusers%2Fforgot-password%2Fnew-password%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/users/forgot-password/new-password/route","pathname":"/api/users/forgot-password/new-password","filename":"route","bundlePath":"app/api/users/forgot-password/new-password/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/users/forgot-password/new-password/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/users/forgot-password/new-password/route"

    

/***/ }),

/***/ 99060:
/***/ ((module) => {

function _extends() {
    return module.exports = _extends = Object.assign ? Object.assign.bind() : function(n) {
        for(var e = 1; e < arguments.length; e++){
            var t = arguments[e];
            for(var r in t)({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
        return n;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6255,8847,4251,194,3832,5506,9616,5911,2778], () => (__webpack_exec__(69865)));
module.exports = __webpack_exports__;

})();