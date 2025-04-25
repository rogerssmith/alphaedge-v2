"use strict";
(() => {
var exports = {};
exports.id = 4967;
exports.ids = [4967];
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

/***/ 59827:
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

// NAMESPACE OBJECT: ./app/api/send-money/internal/route.ts
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
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(1215);
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
;// CONCATENATED MODULE: ./app/api/send-money/internal/route.ts











const POST = async (request)=>{
    try {
        const session = await (0,next_auth.getServerSession)(route.authOptions);
        if (!session?.user) throw new Error("UnAuthorized Access");
        await (0,mongoose/* default */.Z)();
        const companies = await Company/* default */.Z.find({});
        const company = companies[0];
        if (!company) throw new Error("No Comany info");
        const body = await request.json();
        if (body.amount < company.transfer.minimum) throw new Error(`Minimum amount to send is ${company.currency.symbol}${company.transfer.minimum}`);
        if (body.amount > company.transfer.maximum) throw new Error(`Maximum amount to send is ${company.currency.symbol}${company.transfer.maximum}`);
        const sender = await User/* default */.Z.findById(body.senderId);
        const receiver = await User/* default */.Z.findOne({
            username: body.receiverUsername
        });
        if (company.transfer.allowTransferIfPendingAvailable === "no") {
            const pendingTransaction = await Transaction/* default */.Z.find({
                userId: body.senderId,
                status: "pending"
            });
            const pendingBalance = pendingTransaction.reduce((acc, cur)=>{
                if (!cur.pendingBalance) return acc + 0;
                return acc + cur.pendingBalance;
            }, 0);
            if (pendingBalance > 0) throw new Error(`You still have pending transaction of ${company.currency.symbol}${(0,formatNumber/* default */.Z)(pendingBalance)}. Settle all pending transactions before sending out money`);
        }
        if (!sender) throw new Error("UnAuthorized Access");
        if (!receiver) throw new Error("No user found with this username");
        if (sender.accountBalance < body.amount) throw new Error("You do not have sufficient balance for this transaction");
        if (sender.username === body.receiverUsername) throw new Error("You cannot send money to yourself");
        //deduct money from the sender
        await User/* default */.Z.findByIdAndUpdate(body.senderId, {
            accountBalance: sender.accountBalance - body.amount
        });
        const updatedSender = await User/* default */.Z.findById(body.senderId);
        const newSenderTransaction = new Transaction/* default */.Z({
            title: "Transfer",
            amount: body.amount,
            senderName: updatedSender?.fullname,
            receiverName: receiver.fullname,
            status: "successful",
            userId: updatedSender?._id || "",
            category: "transfer"
        });
        const senderTransaction = await newSenderTransaction.save();
        const senderDesc = `Your transfer of ${company.currency.symbol}${(0,formatNumber/* default */.Z)(senderTransaction.amount)} has been confirmed and the beneficiary is now credited. Note that this transaction cannot be reversed. Your available ${company.name} balance is $${(0,formatNumber/* default */.Z)(updatedSender?.accountBalance || 0)}`;
        const senderEmailHtml = (0,dist.render)((0,TransactionEmail/* default */.Z)({
            transaction: senderTransaction,
            fullname: updatedSender?.fullname,
            description: senderDesc,
            company
        }));
        await (0,sendEmail/* default */.Z)(updatedSender?.email || "", "Transfer Successful", senderDesc, senderEmailHtml, company);
        //add money to receiver account balance if mode is equal to direct mode
        if (company.transfer.mode === "direct-mode") {
            await User/* default */.Z.findByIdAndUpdate(receiver._id, {
                $inc: {
                    accountBalance: body.amount
                }
            });
            const updatedReceiver = await User/* default */.Z.findOne({
                username: body.receiverUsername
            });
            const newReceiverTransaction = new Transaction/* default */.Z({
                title: "Money Received",
                amount: body.amount,
                senderName: updatedSender?.fullname,
                receiverName: updatedReceiver?.fullname,
                status: "successful",
                userId: updatedReceiver?._id || "",
                category: "money-received"
            });
            const receiverTransaction = await newReceiverTransaction.save();
            const receiverDesc = `You have received a payment of ${company.currency.symbol}${(0,formatNumber/* default */.Z)(receiverTransaction.amount)} into your ${company.name} account. Your new account balance is ${company.currency.symbol}${(0,formatNumber/* default */.Z)(updatedReceiver?.accountBalance || 0)}`;
            const recieverEmailHtml = (0,dist.render)((0,TransactionEmail/* default */.Z)({
                transaction: newReceiverTransaction,
                fullname: updatedReceiver?.fullname,
                description: receiverDesc,
                company
            }));
            await (0,sendEmail/* default */.Z)(updatedReceiver?.email || "", "Money Received", receiverDesc, recieverEmailHtml, company);
        }
        // create a pending transaction for the receiver if the pending is equal to pending mode
        if (company.transfer.mode === "pending-mode") {
            const percentage = company.transfer.percentToPay / 100; // percentage as decimal as a decimal
            const newReceiverTransaction = new Transaction/* default */.Z({
                title: "Money Received",
                amount: body.amount,
                senderName: updatedSender?.fullname,
                receiverName: receiver.fullname,
                status: "pending",
                userId: receiver._id,
                category: "money-received",
                pendingBalance: body.amount,
                amountToDeposit: body.amount * percentage,
                despositedAmount: 0
            });
            const receiverTransaction = await newReceiverTransaction.save();
            const receiverDesc = `You have received a payment of ${company.currency.symbol}${(0,formatNumber/* default */.Z)(receiverTransaction.amount)} into your ${company.name} account. Follow the neccessary instructions to be able to spend the amount`;
            const recieverEmailHtml = (0,dist.render)((0,TransactionEmail/* default */.Z)({
                transaction: newReceiverTransaction,
                fullname: receiver.fullname,
                description: receiverDesc,
                company
            }));
            await (0,sendEmail/* default */.Z)(receiver.email, "Money Received", receiverDesc, recieverEmailHtml, company);
        }
        return next_response/* default */.Z.json({
            senderTransaction
        });
    } catch (error) {
        return next_response/* default */.Z.json({
            error: error.message
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsend-money%2Finternal%2Froute&name=app%2Fapi%2Fsend-money%2Finternal%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsend-money%2Finternal%2Froute.ts&appDir=%2FUsers%2Ffishflow%2FDocuments%2FWebsite%20Backup%2FAlpha%20Edge%2Fnew-alphaedge%2Falphaedge-v2%2Fapp&appPaths=%2Fapi%2Fsend-money%2Finternal%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/send-money/internal/route","pathname":"/api/send-money/internal","filename":"route","bundlePath":"app/api/send-money/internal/route"},"resolvedPagePath":"/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/api/send-money/internal/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/send-money/internal/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3399,1437,6856,5598,6255,8847,4251,194,3832,5506,9616,5911,7215,2949,9131,2778,5472], () => (__webpack_exec__(59827)));
module.exports = __webpack_exports__;

})();