"use strict";
exports.id = 6174;
exports.ids = [6174];
exports.modules = {

/***/ 60832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13162);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75678);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ModalContainer = (props)=>{
    const { opened, onClose, size, title, children, fullScreen } = props;
    const { mode } = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Modal, {
        fullScreen: fullScreen,
        opened: opened,
        onClose: onClose,
        title: title,
        centered: true,
        size: size ? size : "md",
        classNames: {
            header: `${mode === "light" ? "bg-white text-slate-700" : "bg-[#121212] text-white"}`,
            body: `${mode === "light" ? "bg-white" : "bg-[#121212]"}`,
            content: `${mode === "light" ? "text-slate-700" : "text-white"}`,
            title: `font-semibold text-lg text-black`
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalContainer);


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ isNumber)
/* harmony export */ });
function isNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}


/***/ })

};
;