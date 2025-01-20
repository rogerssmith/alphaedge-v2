"use strict";
(() => {
var exports = {};
exports.id = 1768;
exports.ids = [1768];
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

/***/ 65412:
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

// NAMESPACE OBJECT: ./app/api/coin/[coinId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  PATCH: () => (PATCH)
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
// EXTERNAL MODULE: ./models/Coin.ts
var Coin = __webpack_require__(12647);
;// CONCATENATED MODULE: ./app/api/coin/[coinId]/route.ts





// import { render } from "@react-email/render";
// import sendEmail from "@/constants/sendEmail";
// Protectected route for admin
const GET = async (request, { params })=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        const userSession = session?.user;
        if (!session?.user) throw new Error("UnAuthorized Access");
        if (userSession?.role !== "admin") throw new Error("This is a protected route");
        await (0,mongoose/* default */.Z)();
        //code logic
        const coin = await Coin/* default */.Z.findById(params.coinId);
        if (!coin) throw new Error("This Coin is not Available");
        return next_response/* default */.Z.json(coin);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};
const PATCH = async (request, { params })=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        const userSession = session?.user;
        if (!session?.user) throw new Error("UnAuthorized Access");
        if (userSession?.role !== "admin") throw new Error("This is a protected route");
        await (0,mongoose/* default */.Z)();
        //code logic
        const body = await request.json();
        const coin = await Coin/* default */.Z.findById(params.coinId);
        if (!coin) throw new Error("This Coin is not Available");
        await Coin/* default */.Z.findByIdAndUpdate(params.coinId, {
            walletAddress: body.walletAddress,
            allowed: body.allowed
        });
        const updatedCoin = await Coin/* default */.Z.findById(params.coinId);
        return next_response/* default */.Z.json(updatedCoin);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};
const DELETE = async (request, { params })=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        const userSession = session?.user;
        if (!session?.user) throw new Error("UnAuthorized Access");
        if (userSession?.role !== "admin") throw new Error("This is a protected route");
        await (0,mongoose/* default */.Z)();
        //code logic
        const deletedCoin = await Coin/* default */.Z.findByIdAndDelete(params.coinId);
        if (!deletedCoin) throw new Error("This Coin is not Available");
        return next_response/* default */.Z.json(deletedCoin);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcoin%2F%5BcoinId%5D%2Froute&name=app%2Fapi%2Fcoin%2F%5BcoinId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcoin%2F%5BcoinId%5D%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fcoin%2F%5BcoinId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/coin/[coinId]/route","pathname":"/api/coin/[coinId]","filename":"route","bundlePath":"app/api/coin/[coinId]/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/coin/[coinId]/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/coin/[coinId]/route"

    

/***/ }),

/***/ 12647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const coinSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    allowed: {
        type: String,
        default: "yes",
        enum: [
            "yes",
            "no"
        ]
    },
    walletAddress: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Coin || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Coin", coinSchema));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6856,5598,6255,8847,5506,9616,5911,7215,2949], () => (__webpack_exec__(65412)));
module.exports = __webpack_exports__;

})();