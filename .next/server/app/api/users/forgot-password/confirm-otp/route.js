"use strict";
(() => {
var exports = {};
exports.id = 5502;
exports.ids = [5502];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 44169:
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

// NAMESPACE OBJECT: ./app/api/users/forgot-password/confirm-otp/route.ts
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
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
;// CONCATENATED MODULE: ./app/api/users/forgot-password/confirm-otp/route.ts



// Protectected route for user
const POST = async (request)=>{
    try {
        await (0,mongoose/* default */.Z)();
        //code logic
        const { email, otp } = await request.json();
        const user = await User/* default */.Z.findOne({
            email
        });
        if (!user) throw new Error("User Not Found");
        if (user.recoveryCode !== otp) throw new Error("Invalid code");
        if (Date.now() > user.recoveryCodeExpiry) throw new Error("The code you entered is expired");
        return next_response/* default */.Z.json({
            email,
            otp
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2Fforgot-password%2Fconfirm-otp%2Froute&name=app%2Fapi%2Fusers%2Fforgot-password%2Fconfirm-otp%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fforgot-password%2Fconfirm-otp%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fusers%2Fforgot-password%2Fconfirm-otp%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/users/forgot-password/confirm-otp/route","pathname":"/api/users/forgot-password/confirm-otp","filename":"route","bundlePath":"app/api/users/forgot-password/confirm-otp/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/users/forgot-password/confirm-otp/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/users/forgot-password/confirm-otp/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6255,8847,5506,5911], () => (__webpack_exec__(44169)));
module.exports = __webpack_exports__;

})();