"use strict";
(() => {
var exports = {};
exports.id = 8562;
exports.ids = [8562];
exports.modules = {

/***/ 67096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 99882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

// NAMESPACE OBJECT: ./app/api/loan/request/route.ts
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
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(1215);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
// EXTERNAL MODULE: ./app/api/auth/[...nextauth]/route.ts
var route = __webpack_require__(92949);
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: ./models/Transaction.ts
var Transaction = __webpack_require__(69131);
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/api/loan/request/route.ts







const POST = async (request)=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        if (!session?.user) throw new Error("UnAuthorized Access");
        const userId = session.user.id;
        await (0,mongoose/* default */.Z)();
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const user = await User/* default */.Z.findById(userId);
        if (!user) throw new Error("User Not Found");
        const { amount, loanDuration, loanReason } = await request.json();
        if (amount <= 0 || !loanDuration || !loanReason) throw new Error("One or more Fields are missing value");
        if (Number(amount) < Number(company?.loan.minimum)) throw new Error(`Minimum amount to Request is ${company.currency.symbol}${company?.loan.minimum}`);
        if (Number(amount) > Number(company?.loan.maximum)) throw new Error(`Maximum amount to Request is ${company.currency.symbol}${company?.loan.maximum}`);
        const newTransaction = new Transaction/* default */.Z({
            title: "Loan Request",
            amount,
            userId,
            status: "processing",
            category: "loan",
            loanDuration,
            loanReason,
            note: "We are processing your loan, you will receive the loan shortly once approved"
        });
        const savedTransaction = await newTransaction.save();
        return next_response/* default */.Z.json(savedTransaction);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Floan%2Frequest%2Froute&name=app%2Fapi%2Floan%2Frequest%2Froute&pagePath=private-next-app-dir%2Fapi%2Floan%2Frequest%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Floan%2Frequest%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/loan/request/route","pathname":"/api/loan/request","filename":"route","bundlePath":"app/api/loan/request/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/loan/request/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/loan/request/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6856,5598,6255,8847,5506,9616,5911,7215,2949,9131], () => (__webpack_exec__(99882)));
module.exports = __webpack_exports__;

})();