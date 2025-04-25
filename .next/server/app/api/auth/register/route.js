(() => {
var exports = {};
exports.id = 3002;
exports.ids = [3002];
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

/***/ 19849:
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

// NAMESPACE OBJECT: ./app/api/auth/register/route.ts
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
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: ./lib/mongoose.ts
var mongoose = __webpack_require__(45506);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(67096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
// EXTERNAL MODULE: ./node_modules/@react-email/render/dist/index.js
var dist = __webpack_require__(74449);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@react-email/components/dist/index.mjs
var components_dist = __webpack_require__(73718);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./email-templates/WelcomeEmail.tsx



const WelcomeEmail = (props)=>{
    const { userFirstname, company } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Html, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Head, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Preview, {
                children: company?.welcomeEmail?.emailMessage
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
                                src: company?.logo?.url,
                                width: "auto",
                                height: "60",
                                alt: company?.name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                            style: paragraph,
                            children: [
                                "Hi ",
                                userFirstname,
                                ","
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Text, {
                            style: paragraph,
                            children: company?.welcomeEmail?.emailMessage
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Section, {
                            style: btnContainer,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Button, {
                                pX: 12,
                                pY: 12,
                                style: {
                                    ...WelcomeEmail_button,
                                    backgroundColor: company?.color?.primary
                                },
                                href: company?.baseUrl,
                                children: "Get started"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_dist.Text, {
                            style: paragraph,
                            children: [
                                "Best,",
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                "The ",
                                company?.name,
                                " team"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Hr, {
                            style: hr
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_dist.Text, {
                            style: footer,
                            children: company?.address
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const email_templates_WelcomeEmail = (WelcomeEmail);
const main = {
    backgroundColor: "#ffffff",
    padding: "10px",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
const container = {
    margin: "0 auto",
    padding: "20px 0 48px"
};
const logo = {
    padding: 10,
    width: "100%"
};
const paragraph = {
    fontSize: "16px",
    lineHeight: "26px"
};
const btnContainer = {
    textAlign: "center"
};
const WelcomeEmail_button = {
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center",
    display: "block"
};
const hr = {
    borderColor: "#cccccc",
    margin: "20px 0"
};
const footer = {
    color: "#8898aa",
    fontSize: "12px"
};

// EXTERNAL MODULE: ./constants/sendEmail.ts
var sendEmail = __webpack_require__(52778);
// EXTERNAL MODULE: ./models/Transaction.ts
var Transaction = __webpack_require__(69131);
// EXTERNAL MODULE: ./email-templates/TransactionEmail.tsx
var TransactionEmail = __webpack_require__(95472);
// EXTERNAL MODULE: ./constants/formatNumber.ts
var formatNumber = __webpack_require__(53820);
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/api/auth/register/route.ts











const POST = async (req)=>{
    try {
        const body = await req.json();
        const { fullname, email, username, password } = body;
        await (0,mongoose/* default */.Z)();
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const hashedPassword = external_bcrypt_default().hashSync(password, 12);
        // const bonus = 500;
        const isEmailExist = await User/* default */.Z.find({
            email
        });
        if (isEmailExist.length > 0) {
            throw new Error("User already exist. You can login instead");
        }
        const isUsernameExist = await User/* default */.Z.find({
            username
        });
        if (isUsernameExist.length > 0) {
            throw new Error("This username is being used by another user");
        }
        if (body.refUsername !== "NO REF") {
            const checkReferral = await User/* default */.Z.findOne({
                username: body.refUsername
            });
            if (!checkReferral) throw new Error("No Referral with this username");
        }
        const users = await User/* default */.Z.find({});
        const newUser = new User/* default */.Z({
            fullname,
            email,
            username,
            password: hashedPassword,
            refUsername: body.refUsername,
            role: users.length <= 0 ? "admin" : "user",
            manager: users.length <= 0 ? "yes" : "no"
        });
        const savedUser = await newUser.save();
        if (company.welcomeEmail.status === "on") {
            const welcomeEmailhtml = (0,dist.render)(email_templates_WelcomeEmail({
                userFirstname: savedUser.fullname,
                company
            }));
            await (0,sendEmail/* default */.Z)(savedUser.email, "Welcome", "The platform that helps you make payment locally and others round the world", welcomeEmailhtml, company);
        }
        if (company.signupBonus.status === "on") {
            await User/* default */.Z.findByIdAndUpdate(savedUser._id, {
                $inc: {
                    accountBalance: company.signupBonus.amount
                }
            });
            const newAccountBalTransaction = new Transaction/* default */.Z({
                title: "Sign Up Bonus",
                amount: company.signupBonus.amount,
                status: "successful",
                userId: savedUser._id,
                receiverName: "To Account Balance",
                senderName: `From ${company.name}`,
                category: "money-received"
            });
            const savedTransaction = await newAccountBalTransaction.save();
            const transactionEmailText = `You just received a sum of ${company.currency.symbol}${(0,formatNumber/* default */.Z)(company.signupBonus.amount)} Sign up bonus to your Account balance. Thank you for choosing ${company.name}`;
            const transactionEmailHtml = (0,dist.render)((0,TransactionEmail/* default */.Z)({
                transaction: savedTransaction,
                fullname: savedUser.fullname,
                description: transactionEmailText,
                company
            }));
            await (0,sendEmail/* default */.Z)(savedUser.email, "Sign Up Bonus", transactionEmailText, transactionEmailHtml, company);
        }
        return next_response/* default */.Z.json(savedUser);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fregister%2Froute&name=app%2Fapi%2Fauth%2Fregister%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fauth%2Fregister%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/register/route","pathname":"/api/auth/register","filename":"route","bundlePath":"app/api/auth/register/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/auth/register/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/auth/register/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6255,8847,4251,194,3832,5506,9616,5911,9131,2778,5472], () => (__webpack_exec__(19849)));
module.exports = __webpack_exports__;

})();