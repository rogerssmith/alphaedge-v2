"use strict";
(() => {
var exports = {};
exports.id = 8777;
exports.ids = [8777];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 37516:
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

// NAMESPACE OBJECT: ./app/api/company/route.ts
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
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/api/company/route.ts



// Protectected route for user
const POST = async (request)=>{
    try {
        // const session = await getServerSession(authOptions);
        // if (!session?.user) throw new Error("UnAuthorized Access");
        // const userId = (session.user as { id: string }).id;
        await (0,mongoose/* default */.Z)();
        //code logic
        let initialCompany;
        const companies = await Company/* default */.Z.find({});
        if (companies.length <= 0) {
            const newCompany = new Company/* default */.Z({
                name: "Enter company name"
            });
            const savedCompany = await newCompany.save();
            initialCompany = savedCompany;
        } else {
            initialCompany = companies[0];
        }
        return next_response/* default */.Z.json(initialCompany);
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
}; // // Protectected route for admin
 // export const POST = async (request: Request) => {
 //   try {
 //     const session = await getServerSession(authOptions);
 //     const userSession = session?.user as { role: string } | undefined;
 //     if (!session?.user) throw new Error("UnAuthorized Access");
 //     if (userSession?.role !== "admin")
 //       throw new Error("This is a protected route");
 //     await mongooseConnect();
 //     //code logic
 //     return NextResponse.json("something");
 //   } catch (error: any) {
 //     return NextResponse.json({ error: error.message });
 //   }
 // };

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcompany%2Froute&name=app%2Fapi%2Fcompany%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcompany%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fcompany%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/company/route","pathname":"/api/company","filename":"route","bundlePath":"app/api/company/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/company/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/company/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6255,8847,5506,9616], () => (__webpack_exec__(37516)));
module.exports = __webpack_exports__;

})();