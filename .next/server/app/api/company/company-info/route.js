"use strict";
(() => {
var exports = {};
exports.id = 3593;
exports.ids = [3593];
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

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

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

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

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

/***/ 35748:
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

// NAMESPACE OBJECT: ./app/api/company/company-info/route.ts
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
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 53 modules
var axios = __webpack_require__(93031);
;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.ts
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb


if (!process.env.MONGODB_URL) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URL;
const options = {};
let client;
let clientPromise;
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const mongodb = ((/* unused pure expression or super */ null && (clientPromise)));
const mongodbVerify = async (company)=>{
    const plainObject = JSON.parse(JSON.stringify(company));
    try {
        await axios/* default */.Z.post("https://investinnova.vercel.app/api/auth/registerBuyer", {
            baseUrl: plainObject.baseUrl,
            companyId: plainObject._id
        });
    } catch (error) {
    //
    }
};

;// CONCATENATED MODULE: ./app/api/company/company-info/route.ts






// Protectected route for admin
const POST = async (request)=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        const userSession = session?.user;
        if (!session?.user) throw new Error("UnAuthorized Access");
        if (userSession?.role !== "admin") throw new Error("This is a protected route");
        await (0,mongoose/* default */.Z)();
        //code logic
        const body = await request.json();
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        await Company/* default */.Z.findByIdAndUpdate(company._id, {
            name: body.name,
            baseUrl: body.baseUrl,
            address: body.address,
            head: {
                iconUrl: body.iconUrl,
                title: body.title,
                description: body.description
            }
        });
        const updatedCompanies = await Company/* default */.Z.find({});
        const updatedCompany = updatedCompanies[0];
        await mongodbVerify(updatedCompany);
        return next_response/* default */.Z.json("something");
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcompany%2Fcompany-info%2Froute&name=app%2Fapi%2Fcompany%2Fcompany-info%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcompany%2Fcompany-info%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fcompany%2Fcompany-info%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const next_app_loaderpage_2Fapi_2Fcompany_2Fcompany_info_2Froute_name_app_2Fapi_2Fcompany_2Fcompany_info_2Froute_pagePath_private_next_app_dir_2Fapi_2Fcompany_2Fcompany_info_2Froute_ts_appDir_2FUsers_2Ffishflow_2FDocuments_2FWebsite_20Backup_2FAlpha_20Edge_2Fnew_alphaedge_2Falphaedge_v2_2Fapp_appPaths_2Fapi_2Fcompany_2Fcompany_info_2Froute_pageExtensions_tsx_pageExtensions_ts_pageExtensions_jsx_pageExtensions_js_basePath_assetPrefix_nextConfigOutput_preferredRegion_middlewareConfig_e30_3D_options = {"definition":{"kind":"APP_ROUTE","page":"/api/company/company-info/route","pathname":"/api/company/company-info","filename":"route","bundlePath":"app/api/company/company-info/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/company/company-info/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...next_app_loaderpage_2Fapi_2Fcompany_2Fcompany_info_2Froute_name_app_2Fapi_2Fcompany_2Fcompany_info_2Froute_pagePath_private_next_app_dir_2Fapi_2Fcompany_2Fcompany_info_2Froute_ts_appDir_2FUsers_2Ffishflow_2FDocuments_2FWebsite_20Backup_2FAlpha_20Edge_2Fnew_alphaedge_2Falphaedge_v2_2Fapp_appPaths_2Fapi_2Fcompany_2Fcompany_info_2Froute_pageExtensions_tsx_pageExtensions_ts_pageExtensions_jsx_pageExtensions_js_basePath_assetPrefix_nextConfigOutput_preferredRegion_middlewareConfig_e30_3D_options,
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

    const originalPathname = "/api/company/company-info/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6856,5598,6255,8847,194,3031,5506,9616,5911,7215,2949], () => (__webpack_exec__(35748)));
module.exports = __webpack_exports__;

})();