exports.id = 7641;
exports.ids = [7641];
exports.modules = {

/***/ 91736:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 85029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13162);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCompany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61126);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Button = ({ label, onClick, disabled, outline, small, icon: Icon, loading, type, primaryColor })=>{
    const { company } = (0,_hooks_useCompany__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const resolvedPrimaryColor = primaryColor ?? company?.color.primary;
    const primaryVeryLightColor = company?.color.primaryVeryLight;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: type,
        style: {
            backgroundColor: "#9D00FF"
        },
        onClick: onClick,
        disabled: disabled || loading,
        className: `relative disabled:opacity-70 disabled:cursor-not-allowed 
      rounded-lg hover:opacity-80 transition 
      w-full disabled:active:scale-[1] active:scale-[.95] 
      flex justify-center items-center gap-2 
      ${outline ? "text-slate-700" : "text-white"} 
      ${small ? "h-[40px]" : "h-[55px]"} 
      ${small ? "text-sm" : " text-base"} 
      ${small ? "font-light" : "font-semibold"} 
      ${small ? "border-[1px]" : "border-2"}`,
        children: [
            !loading && label,
            Icon && !loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                size: 24
            }),
            loading && // <MoonLoader size={24} color={outline ? "#181818" : "#ffff"} />
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Loader, {
                size: 24,
                color: outline ? primaryColor : "#ffff"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;