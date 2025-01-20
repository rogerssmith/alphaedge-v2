exports.id = 9164;
exports.ids = [9164];
exports.modules = {

/***/ 59164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7141);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75678);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_formatNumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1868);
/* harmony import */ var _constants_formatDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37044);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13162);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85029);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64348);
/* harmony import */ var _components_hooks_useCompany__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61126);
/* __next_internal_client_entry_do_not_use__ default auto */ 










const AdminTransactionCard = (props)=>{
    const { mode } = (0,_components_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { title, amount, status, category, createdAt, senderName, id } = props;
    const date = createdAt && new Date(createdAt);
    const formattedDate = (0,_constants_formatDate__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(date);
    const { company } = (0,_components_hooks_useCompany__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const primaryLightColor = company?.color.primaryLight;
    const currency = company?.currency.symbol;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `max-w-[250px] w-[90%] h-[300px] 
    shadow-md rounded-md p-5 
    transition-all duration-300 hover:scale-105 
    hover:shadow-lg flex flex-col items-center 
    gap-3 justify-center
    ${mode === "light" ? "shadow-[#d9d9d9] hover:shadow-[#c1c1c1]" : "shadow-[#5d5d5d] hover:shadow-[#7b7b7b]"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.Avatar, {
                        color: "red",
                        alt: "its me",
                        size: "lg",
                        radius: "xl",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__/* .MdPayments */ .Mu3, {
                            color: primaryLightColor
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `font-normal italic text-sm 
          ${status === "pending" && "text-[#2196f3]"} 
          ${status === "successful" && "text-[#00c853]"} 
          ${status === "processing" && "text-[#ff9800]"} 
          ${status === "action-needed" && "text-rose-400"} 
          ${status === "rejected" && "text-[#f44336]"}`,
                        children: [
                            status === "pending" && "Pending...",
                            status === "successful" && "Successful",
                            status === "processing" && "Processing...",
                            status === "action-needed" && "Action Needed",
                            status === "rejected" && "Rejected"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    currency,
                    (0,_constants_formatNumber__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(+amount)
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-1.5 text-center items-center justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `font-semibold
            ${mode === "light" ? "text-gray-500" : "text-white"}`,
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `font-semibold text-sm text-gray-300`,
                        children: `${formattedDate} . ${category === "money-received" ? senderName : ""}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                onClick: ()=>push(`/admin/transactions/${id}`),
                label: "View Details"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminTransactionCard);


/***/ }),

/***/ 37044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatDate = (date)=>{
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        year: "2-digit"
    }).format(date);
    return formattedDate;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDate);


/***/ }),

/***/ 1868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatNumber = (number)=>{
    return number.toLocaleString("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatNumber);


/***/ }),

/***/ 7141:
/***/ (() => {



/***/ })

};
;