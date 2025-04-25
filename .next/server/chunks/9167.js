"use strict";
exports.id = 9167;
exports.ids = [9167];
exports.modules = {

/***/ 79167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75678);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85780);
/* harmony import */ var _hooks_useCompany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61126);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ThemeToggle = ()=>{
    const { mode, onLightMode, onDarkMode } = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { company } = (0,_hooks_useCompany__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const primaryColor = company?.color.primary;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (mode !== "dark") {
            onDarkMode();
        }
    }, [
        mode,
        onDarkMode
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            mode === "dark" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__/* .IoMdSunny */ .J8Y, {
                color: primaryColor,
                onClick: onLightMode,
                className: "cursor-pointer",
                size: 24
            }),
            mode === "light" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__/* .IoMdMoon */ .ELD, {
                onClick: onDarkMode,
                className: "text-gray-500 cursor-pointer",
                size: 24
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeToggle);


/***/ })

};
;