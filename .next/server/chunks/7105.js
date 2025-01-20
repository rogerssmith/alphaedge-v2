"use strict";
exports.id = 7105;
exports.ids = [7105];
exports.modules = {

/***/ 27105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCompany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61126);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const TextInput = (props)=>{
    const { maxLength, disabled, value, onChange, secureEntry, placeholder, icon: Icon, iconAction, id } = props;
    const [isFocus, setIsFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { company } = (0,_hooks_useCompany__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const primaryColor = company?.color.primary;
    const primaryLightColor = company?.color.primaryLight;
    const primaryVeryLightColor = company?.color.primaryVeryLight;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "white",
            borderColor: primaryVeryLightColor
        },
        "aria-disabled": true,
        className: `flex justify-between w-full 
    items-center px-3 rounded-lg border 
    ${disabled && "bg-gray-100 cursor-not-allowed"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                maxLength: maxLength,
                onFocus: ()=>setIsFocus(true),
                onBlur: ()=>setIsFocus(false),
                disabled: disabled,
                id: id,
                type: secureEntry ? "password" : "text",
                placeholder: placeholder,
                value: value,
                onChange: onChange,
                className: `py-4 outline-none w-full 
        h-full pr-2 bg-inherit 
        text-gray-500 font-semibold 
        disabled:cursor-not-allowed`
            }),
            Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                onClick: iconAction,
                size: 24,
                className: "cursor-pointer text-gray-600"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);


/***/ })

};
;