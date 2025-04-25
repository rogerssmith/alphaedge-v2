exports.id = 7215;
exports.ids = [7215];
exports.modules = {

/***/ 37215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  generateMetadata: () => (/* binding */ generateMetadata),
  getCompanyData: () => (/* binding */ getCompanyData)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Nunito","arguments":[{"subsets":["latin"],"weight":["400","600","500","700"],"preload":true,"style":["italic","normal"]}],"variableName":"nunito"}
var layout_tsx_import_Nunito_arguments_subsets_latin_weight_400_600_500_700_preload_true_style_italic_normal_variableName_nunito_ = __webpack_require__(66563);
var layout_tsx_import_Nunito_arguments_subsets_latin_weight_400_600_500_700_preload_true_style_italic_normal_variableName_nunito_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Nunito_arguments_subsets_latin_weight_400_600_500_700_preload_true_style_italic_normal_variableName_nunito_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./components/ToastProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/components/ToastProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ToastProvider = (__default__);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(92817);
;// CONCATENATED MODULE: ./components/AuthProvider.tsx

const AuthProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/components/AuthProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthProvider_esModule, $$typeof: AuthProvider_$$typeof } = AuthProvider_proxy;
const AuthProvider_default_ = AuthProvider_proxy.default;


/* harmony default export */ const AuthProvider = (AuthProvider_default_);
;// CONCATENATED MODULE: ./components/ClientOnly.tsx

const ClientOnly_proxy = (0,module_proxy.createProxy)(String.raw`/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/components/ClientOnly.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ClientOnly_esModule, $$typeof: ClientOnly_$$typeof } = ClientOnly_proxy;
const ClientOnly_default_ = ClientOnly_proxy.default;


/* harmony default export */ const ClientOnly = (ClientOnly_default_);
// EXTERNAL MODULE: ./lib/mongoose.ts
var mongoose = __webpack_require__(45506);
// EXTERNAL MODULE: ./models/Company.ts
var Company = __webpack_require__(39616);
;// CONCATENATED MODULE: ./app/layout.tsx
// import { Analytics } from "@vercel/analytics/react";








const getCompanyData = async ()=>{
    await (0,mongoose/* default */.Z)();
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
    const plainObject = JSON.parse(JSON.stringify(initialCompany));
    return plainObject;
};
async function generateMetadata() {
    await (0,mongoose/* default */.Z)();
    const companies = await Company/* default */.Z.find({});
    const company = companies[0];
    return {
        title: company?.head?.title || "Not set",
        icons: company?.head?.iconUrl.startsWith("https") ? company?.head?.iconUrl : company?.head?.iconUrl.replace("http", "https") || "https://example.com/image.jpg",
        description: company?.head?.description || "Not set"
    };
}
async function RootLayout({ children }) {
    const company = await getCompanyData();
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("html", {
            lang: "en",
            children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: `${(layout_tsx_import_Nunito_arguments_subsets_latin_weight_400_600_500_700_preload_true_style_italic_normal_variableName_nunito_default()).className} max-w-[2520px] min-h-screen`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ClientOnly, {
                    companyData: company,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ToastProvider, {}),
                        children
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 92817:
/***/ (() => {



/***/ })

};
;