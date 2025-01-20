(() => {
var exports = {};
exports.id = 8269;
exports.ids = [8269];
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

/***/ 14982:
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

// NAMESPACE OBJECT: ./app/api/cron/get/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
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
// EXTERNAL MODULE: ./constants/logger.ts
var logger = __webpack_require__(9890);
// EXTERNAL MODULE: ./models/Investment.ts
var Investment = __webpack_require__(69985);
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: ./models/Return.ts
var Return = __webpack_require__(73972);
// EXTERNAL MODULE: ./email-templates/ReturnsEmail.tsx
var ReturnsEmail = __webpack_require__(84637);
;// CONCATENATED MODULE: ./app/api/cron/get/route.ts










const GET = async ()=>{
    try {
        await (0,mongoose/* default */.Z)();
        //code logic
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const investments = await Investment/* default */.Z.find({
            status: "active"
        });
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        if (company.lastInvestmentDailyCronJob > currentDate.getTime()) {
            logger/* default */.Z.info("Cron Job Investment already ran for the day");
            return next_response/* default */.Z.json({
                message: "Cron Job Investment already ran for the day"
            });
        }
        if (investments.length <= 0) {
            logger/* default */.Z.info("No Active Investments");
            return next_response/* default */.Z.json({
                message: "No Active Investments"
            });
        }
        const investors = await User/* default */.Z.find({
            _id: {
                $in: investments.map((item)=>item.userId)
            }
        });
        const returns = [];
        for (const investment of investments){
            const dailyPercent = investment.ROIDaily / 100;
            const dailyProfit = investment.amountInvested * dailyPercent;
            const user = investors.find((element)=>element._id.toString() === investment.userId.toString());
            if (investment.duration > 0) {
                investment.duration--;
                investment.ROIReceived += dailyProfit;
                user.investProfitBalance += dailyProfit;
                user.investWithdrawableBalance += dailyProfit;
                returns.push({
                    title: "New Return",
                    amount: dailyProfit,
                    investmentId: investment._id
                });
            }
            if (investment.duration <= 0) {
                investment.status = "completed";
                user.investBalance += -investment.amountInvested;
                user.investProfitBalance += -investment.ROIReceived;
                user.investWithdrawableBalance += investment.amountInvested;
            }
        }
        const updatedInvestment = await Investment/* default */.Z.bulkSave(investments);
        const newReturns = await Return/* default */.Z.insertMany(returns);
        const updatedInvestors = await User/* default */.Z.bulkSave(investors);
        const oneDay = 86400000; // 180000
        await Company/* default */.Z.findByIdAndUpdate(company._id, {
            lastInvestmentDailyCronJob: currentDate.getTime() + oneDay
        });
        //send return email to users
        for (const curReturn of newReturns){
            const curInvestment = investments.find((element)=>element._id.toString() === curReturn.investmentId.toString());
            const curUser = investors.find((element)=>element._id.toString() === curInvestment.userId.toString());
            const emailHtml = (0,dist.render)((0,ReturnsEmail/* default */.Z)({
                planName: curInvestment.planName,
                fullname: curUser.fullname,
                profitAmount: curReturn.amount,
                totalProfit: curInvestment.ROIReceived,
                investmentId: curInvestment._id,
                company
            }));
            await (0,sendEmail/* default */.Z)(curUser.email, curReturn.title, `You have a new return in your ${curInvestment.planName} investment`, emailHtml, company);
        }
        logger/* default */.Z.info("Investment Operation is Successfull");
        return next_response/* default */.Z.json({
            message: "Investment Operation is Successfull",
            newReturns,
            updatedInvestors,
            updatedInvestment
        });
    } catch (error) {
        logger/* default */.Z.error(error.message);
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcron%2Fget%2Froute&name=app%2Fapi%2Fcron%2Fget%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcron%2Fget%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fcron%2Fget%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/cron/get/route","pathname":"/api/cron/get","filename":"route","bundlePath":"app/api/cron/get/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/cron/get/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/cron/get/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6255,8847,4251,194,3832,5506,9616,5911,2778,9541,4637], () => (__webpack_exec__(14982)));
module.exports = __webpack_exports__;

})();