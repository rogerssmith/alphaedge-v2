(() => {
var exports = {};
exports.id = 8757;
exports.ids = [8757];
exports.modules = {

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

/***/ 19688:
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

// NAMESPACE OBJECT: ./app/api/users/forgot-password/route.ts
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
// EXTERNAL MODULE: ./node_modules/@react-email/render/dist/index.js
var dist = __webpack_require__(74449);
// EXTERNAL MODULE: ./constants/sendEmail.ts
var sendEmail = __webpack_require__(52778);
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
;// CONCATENATED MODULE: ./constants/generateOtp.ts
const generateOtp = ()=>{
    return Math.random().toString().slice(2, 8);
};
/* harmony default export */ const constants_generateOtp = (generateOtp);

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@react-email/components/dist/index.mjs
var components_dist = __webpack_require__(73718);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./email-templates/ResetPasswordEmail.tsx



const ResetPasswordEmail = (props)=>{
    const { userFirstname, resetPasswordCode, company } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Preview, {
                children: "Reset your password"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Body, {
                style: main,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Container, {
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Section, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                    style: ResetPasswordEmail_text,
                                    children: [
                                        "Hi ",
                                        userFirstname,
                                        ","
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                    style: ResetPasswordEmail_text,
                                    children: [
                                        "Someone recently requested a password change for your",
                                        " ",
                                        company.name,
                                        "account. If this was you, you can copy the code:"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Section, {
                                    style: codeBox,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Text, {
                                            style: confirmationCodeText,
                                            children: resetPasswordCode
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Text, {
                                            style: expireText,
                                            children: "Code will expire in one hour"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Text, {
                                    style: ResetPasswordEmail_text,
                                    children: "If you don't want to change your password or didn't request this, just ignore and delete this message."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                                    style: ResetPasswordEmail_text,
                                    children: [
                                        "To keep your account secure, please don't forward this email to anyone. Contact us for",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Link, {
                                            style: ResetPasswordEmail_anchor,
                                            href: company.baseUrl,
                                            children: "any assistant."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Text, {
                                    style: ResetPasswordEmail_text,
                                    children: "Have a nice Day!"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const email_templates_ResetPasswordEmail = (ResetPasswordEmail);
const main = {
    backgroundColor: "#f6f9fc",
    padding: "10px 0"
};
const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "27px"
};
const ResetPasswordEmail_text = {
    fontSize: "16px",
    fontFamily: "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
    fontWeight: "300",
    color: "#404040",
    lineHeight: "26px"
};
const expireText = {
    textAlign: "center",
    color: "#f43f5e",
    fontWeight: 500
};
const codeBox = {
    background: "rgb(245, 244, 245)",
    borderRadius: "4px",
    marginRight: "50px",
    marginBottom: "30px",
    padding: "43px 23px"
};
const confirmationCodeText = {
    fontSize: "30px",
    textAlign: "center",
    verticalAlign: "middle"
};
const logo = {
    padding: 10,
    width: "100%"
};
const ResetPasswordEmail_anchor = {
    textDecoration: "underline"
};

// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/api/users/forgot-password/route.ts








// Protectected route for user
const POST = async (request)=>{
    try {
        const oneHour = 3600000;
        await (0,mongoose/* default */.Z)();
        //code logic
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const { email } = await request.json();
        const user = await User/* default */.Z.findOne({
            email
        });
        if (!user) throw new Error("No user Found");
        const otp = constants_generateOtp();
        const expiry = Date.now() + oneHour;
        await User/* default */.Z.findOneAndUpdate({
            email
        }, {
            recoveryCode: otp,
            recoveryCodeExpiry: expiry
        });
        const emailText = `Someone recently requested a password change for your Paywander
account. If this was you, you can copy the code: ${otp} \ .Code will be available for 1 hour. If you don't want to change your password or didn't
request this, just ignore and delete this message. \  To keep your account secure, please don&apos;t forward this email
to anyone. Contact us for any assistant: ${company.baseUrl}`;
        const htmlData = (0,dist.render)(email_templates_ResetPasswordEmail({
            userFirstname: user.fullname,
            resetPasswordCode: otp,
            company
        }));
        const result = await (0,sendEmail/* default */.Z)(user.email, "Reset Password", emailText, htmlData, company);
        return next_response/* default */.Z.json(result);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2Fforgot-password%2Froute&name=app%2Fapi%2Fusers%2Fforgot-password%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot-password%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fusers%2Fforgot-password%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/users/forgot-password/route","pathname":"/api/users/forgot-password","filename":"route","bundlePath":"app/api/users/forgot-password/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/users/forgot-password/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/users/forgot-password/route"

    

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6255,8847,4251,194,3832,5506,9616,5911,2778], () => (__webpack_exec__(19688)));
module.exports = __webpack_exports__;

})();