"use strict";
(() => {
var exports = {};
exports.id = 9970;
exports.ids = [9970];
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

/***/ 50852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 17578:
/***/ ((module) => {

module.exports = require("dns");

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

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

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

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

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

/***/ 67671:
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

// NAMESPACE OBJECT: ./app/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
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
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: ./models/Transaction.ts
var Transaction = __webpack_require__(69131);
// EXTERNAL MODULE: ./constants/sendEmail.ts
var sendEmail = __webpack_require__(52778);
// EXTERNAL MODULE: ./node_modules/@react-email/render/dist/index.js
var dist = __webpack_require__(74449);
// EXTERNAL MODULE: ./email-templates/TransactionEmail.tsx
var TransactionEmail = __webpack_require__(95472);
// EXTERNAL MODULE: ./constants/formatNumber.ts
var formatNumber = __webpack_require__(53820);
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]/route.ts











// Protectected route for admin
const PATCH = async (request, { params })=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        if (!session?.user) throw new Error("UnAuthorized Access");
        await (0,mongoose/* default */.Z)();
        //code logic
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const transaction = await Transaction/* default */.Z.findByIdAndUpdate(params.transactionId, {
            status: "successful",
            note: undefined
        });
        if (!transaction) throw new Error("Transaction not found");
        const updatedUser = await User/* default */.Z.findByIdAndUpdate(transaction.userId, {
            $inc: {
                accountBalance: transaction.amount
            }
        });
        if (!updatedUser) throw new Error("Transaction owner not found");
        // cheking if this transaction is linked to a pending transaction
        // cheking if this transaction is linked to a pending transaction
        if (transaction.linkedTransactionId) {
            const pendingTransaction = await Transaction/* default */.Z.findById(transaction.linkedTransactionId);
            if (!pendingTransaction) throw new Error("Pending Transaction not found");
            // const companyPercent = company.transfer.percentToPay / 100; //pecent in decimal
            // const percentCal =
            //   transaction.amount *
            //   (pendingTransaction.amount /
            //     (pendingTransaction.amount * companyPercent));
            if (transaction.amount >= Number(pendingTransaction.amountToDeposit)) {
                await User/* default */.Z.findByIdAndUpdate(pendingTransaction.userId, {
                    $inc: {
                        accountBalance: pendingTransaction.pendingBalance
                    }
                });
                await Transaction/* default */.Z.findByIdAndUpdate(transaction.linkedTransactionId, {
                    pendingBalance: 0,
                    status: "successful",
                    amountToDeposit: 0,
                    $inc: {
                        despositedAmount: transaction.amount
                    }
                });
            } else {
                // await User.findByIdAndUpdate(pendingTransaction.userId, {
                //   $inc: { accountBalance: percentCal },
                // });
                await Transaction/* default */.Z.findByIdAndUpdate(transaction.linkedTransactionId, {
                    $inc: {
                        amountToDeposit: -transaction.amount,
                        despositedAmount: transaction.amount
                    }
                });
            }
        }
        const latestUserUpdate = await User/* default */.Z.findById(transaction.userId);
        if (!latestUserUpdate) throw new Error("Latest User not found");
        const updatedTransaction = await Transaction/* default */.Z.findById(params.transactionId);
        if (!updatedTransaction) throw new Error("No updated transaction found");
        const emailText = `Your deposit of ${company.currency.symbol}${(0,formatNumber/* default */.Z)(updatedTransaction.amount)} is approved. Your new balance is ${company.currency.symbol}${(0,formatNumber/* default */.Z)(latestUserUpdate.accountBalance)}`;
        const emailHtml = (0,dist.render)((0,TransactionEmail/* default */.Z)({
            transaction: updatedTransaction,
            description: emailText,
            fullname: updatedUser.fullname,
            company
        }));
        await (0,sendEmail/* default */.Z)(updatedUser.email, "Deposit Approved", emailText, emailHtml, company);
        return next_response/* default */.Z.json({
            updatedUser,
            transaction
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadmin%2Ftransactions%2Fdeposit%2Fapprove%2Fautomatic-coin-payment%2F%5BtransactionId%5D%2Froute&name=app%2Fapi%2Fadmin%2Ftransactions%2Fdeposit%2Fapprove%2Fautomatic-coin-payment%2F%5BtransactionId%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Ftransactions%2Fdeposit%2Fapprove%2Fautomatic-coin-payment%2F%5BtransactionId%5D%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fadmin%2Ftransactions%2Fdeposit%2Fapprove%2Fautomatic-coin-payment%2F%5BtransactionId%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]/route","pathname":"/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]","filename":"route","bundlePath":"app/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/admin/transactions/deposit/approve/automatic-coin-payment/[transactionId]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6856,5598,6255,8847,4251,194,3832,5506,9616,5911,7215,2949,9131,2778,5472], () => (__webpack_exec__(67671)));
module.exports = __webpack_exports__;

})();