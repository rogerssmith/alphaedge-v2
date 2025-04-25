"use strict";
exports.id = 3584;
exports.ids = [3584];
exports.modules = {

/***/ 33584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth_Register)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(85029);
// EXTERNAL MODULE: ./components/TextInput.tsx
var TextInput = __webpack_require__(27105);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(16775);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(19722);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(85780);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(41240);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./components/auth/Container.tsx
var Container = __webpack_require__(3989);
// EXTERNAL MODULE: ./components/hooks/useTheme.ts
var useTheme = __webpack_require__(75678);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 53 modules
var axios = __webpack_require__(3679);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
// EXTERNAL MODULE: ./node_modules/validator/index.js
var validator = __webpack_require__(17845);
var validator_default = /*#__PURE__*/__webpack_require__.n(validator);
// EXTERNAL MODULE: ./components/modals/ModalContainer.tsx
var ModalContainer = __webpack_require__(60832);
;// CONCATENATED MODULE: ./components/auth/AccountInactivityModal.tsx





const AccountInactivityModal = (props)=>{
    const { opened, onClose, signUp, loading } = props;
    const router = (0,navigation.useRouter)();
    const signUpHandler = async ()=>{
        signUp();
        onClose();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ModalContainer/* default */.Z, {
        title: `Account Inactivity Notice`,
        opened: opened,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "If you plan to change your country location after registration, please note that your account will be temporarily inactive for a few months during this transition. This measure ensures the security of your account. You will regain access once the transition is complete."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-3",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        loading: loading,
                        label: "I Understand, Continue",
                        onClick: signUpHandler
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const auth_AccountInactivityModal = (AccountInactivityModal);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/auth/Register.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const Register = (props)=>{
    const { refUsername } = props;
    const router = (0,navigation.useRouter)();
    const { mode } = (0,useTheme/* default */.Z)();
    const [loading, setLoading] = (0,react_.useState)(false);
    const [modalOpen, setModalOpen] = (0,react_.useState)(false);
    const [inputs, setInputs] = (0,react_.useState)({
        fullName: "",
        email: "",
        password: "",
        username: "",
        refUsername: refUsername?.toString().toLowerCase() || "",
        isSecure: true
    });
    const registerHandler = async ()=>{
        const data = {
            fullname: inputs.fullName,
            email: inputs.email,
            username: inputs.username,
            password: inputs.password,
            refUsername: inputs.refUsername.trim() === "" ? "NO REF" : inputs.refUsername
        };
        const nameArr = data.fullname.trim().split(" ");
        if (nameArr.length < 2) return dist/* toast */.Am.error("First Name and Last Name Is Needed", {
            duration: 10000
        });
        const checkNameLength = nameArr.map((item)=>item.length < 2);
        if (checkNameLength.includes(true)) return dist/* toast */.Am.error("Your First name and Last name should have atleast 2 characters each", {
            duration: 10000
        });
        const isEmail = validator_default().isEmail(data.email.trim());
        if (!isEmail) return dist/* toast */.Am.error("This is Not a valid email");
        const strongPassword = validator_default().isStrongPassword(data.password);
        if (!strongPassword) return dist/* toast */.Am.error("Use a stronger password. your password should have Minimum of 8 chararacters, Atleast one uppercase character, Atleast one Number and Atleast one Symbol(@ - . ; :)+(_)", {
            duration: 15000
        });
        if (data.username.trim().length < 4) {
            return dist/* toast */.Am.error("Your username should have atleast 4 characters");
        }
        if (data.username.trim().split(" ").length > 1) return dist/* toast */.Am.error("Invalid username: Username should be one word e.g woodman NOT wood man", {
            duration: 10000
        });
        try {
            setLoading(true);
            const res = await axios/* default */.Z.post("/api/auth/register", data);
            if (res.data.error) throw new Error(res.data.error);
            const res1 = await (0,react.signIn)("credentials", {
                email: inputs.email,
                password: inputs.password,
                redirect: false
            });
            if (res1?.error) throw new Error(res1?.error);
            router.replace("/home");
            dist/* toast */.Am.success("login successful");
        } catch (error) {
            dist/* toast */.Am.error(error.message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col gap-2.5 w-full items-center p-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col gap-2.5 w-full p-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                id: "name",
                                icon: io_index_esm/* IoMdPerson */.hyG,
                                placeholder: "Enter FullName e.g John Doe",
                                value: inputs.fullName,
                                onChange: (e)=>setInputs({
                                        ...inputs,
                                        fullName: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                id: "email",
                                icon: ai_index_esm/* AiFillMail */.Uh$,
                                placeholder: "Enter Your Email",
                                value: inputs.email,
                                onChange: (e)=>setInputs({
                                        ...inputs,
                                        email: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                id: "username",
                                icon: index_esm/* FaUserAlt */.q1E,
                                placeholder: "Enter Your username",
                                value: inputs.username,
                                onChange: (e)=>setInputs({
                                        ...inputs,
                                        username: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                id: "password",
                                icon: inputs.isSecure ? index_esm/* FaEye */.dSq : index_esm/* FaEyeSlash */.tgn,
                                placeholder: "Enter Your Password",
                                secureEntry: inputs.isSecure,
                                iconAction: ()=>setInputs({
                                        ...inputs,
                                        isSecure: !inputs.isSecure
                                    }),
                                value: inputs.password,
                                onChange: (e)=>setInputs({
                                        ...inputs,
                                        password: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TextInput/* default */.Z, {
                                id: "refUsername",
                                icon: index_esm/* FaUserAlt */.q1E,
                                placeholder: "Enter Referral Username (optional)",
                                value: inputs.refUsername,
                                onChange: (e)=>setInputs({
                                        ...inputs,
                                        refUsername: e.target.value
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                outline: false,
                                small: false,
                                label: "Sign Up",
                                onClick: ()=>setModalOpen(true),
                                loading: loading,
                                primaryColor: "#7439b8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col gap-2.5 w-full items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `font-semibold 
        ${mode === "light" ? "text-gray-500" : "text-gray-500 underline"}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/login",
                                children: " Already have an account? Sign in "
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(auth_AccountInactivityModal, {
                opened: modalOpen,
                onClose: ()=>setModalOpen(false),
                signUp: registerHandler,
                loading: loading
            })
        ]
    });
};
/* harmony default export */ const auth_Register = (Register);


/***/ }),

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


/***/ })

};
;