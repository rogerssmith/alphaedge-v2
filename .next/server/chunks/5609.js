exports.id = 5609;
exports.ids = [5609];
exports.modules = {

/***/ 41401:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 94659))

/***/ }),

/***/ 42058:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60144));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87182));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98186));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6037, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2377));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2215))

/***/ }),

/***/ 94659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_useCompany__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61126);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13162);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Loading = ()=>{
    const { company } = (0,_components_hooks_useCompany__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const primaryLightColor = "#9D00FF";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-[70vh] w-full flex items-center justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Loader, {
            color: primaryLightColor
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 2215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authenticated_ClientLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/zustand/esm/index.mjs + 1 modules
var esm = __webpack_require__(13998);
;// CONCATENATED MODULE: ./components/hooks/useMobileNavbar.ts

const useMobileNavbar = (0,esm/* create */.Ue)((set)=>({
        isOpen: false,
        onOpen: ()=>set({
                isOpen: true
            }),
        onClose: ()=>set({
                isOpen: false
            })
    }));
/* harmony default export */ const hooks_useMobileNavbar = (useMobileNavbar);

// EXTERNAL MODULE: ./components/hooks/useTheme.ts
var useTheme = __webpack_require__(75678);
// EXTERNAL MODULE: ./components/hooks/useCompany.ts
var useCompany = __webpack_require__(61126);
;// CONCATENATED MODULE: ./components/authenticated/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Navbar = ({ toggleSidebar })=>{
    const pathName = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const { onOpen } = hooks_useMobileNavbar();
    const { mode } = (0,useTheme/* default */.Z)();
    const { company } = (0,useCompany/* default */.Z)();
    const primaryColor = company?.color.primary;
    const primaryLightColor = company?.color.primaryLight;
    const primaryVeryLightColor = company?.color.primaryVeryLight;
    const [homeHover, setHomeHover] = (0,react_.useState)(false);
    const [moneyHover, setMoneyHover] = (0,react_.useState)(false);
    const [cardHover, setCardHover] = (0,react_.useState)(false);
    const [accountHover, setAccountHover] = (0,react_.useState)(false);
    const getColor = (condition, hoverState)=>{
        if (condition) {
            if (mode === "light") {
                return primaryColor;
            } else {
                return primaryLightColor;
            }
        } else {
            if (hoverState) {
                return primaryLightColor;
            } else {
                if (mode === "light") {
                    return "#334155";
                } else {
                    return "white";
                }
            }
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pl-4 md:pl-16",
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                "aria-hidden": "true",
                className: "h-8 w-8 text-gray-700 cursor-pointer",
                onClick: toggleSidebar,
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    "fill-rule": "evenodd",
                    d: "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",
                    "clip-rule": "evenodd"
                })
            })
        })
    });
};
/* harmony default export */ const authenticated_Navbar = (Navbar);

// EXTERNAL MODULE: ./node_modules/@mantine/core/cjs/index.js
var cjs = __webpack_require__(13162);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(16775);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
;// CONCATENATED MODULE: ./components/authenticated/MobileNavbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const MobileNavbar = ()=>{
    const { isOpen, onClose } = hooks_useMobileNavbar();
    const { mode } = (0,useTheme/* default */.Z)();
    const pathName = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const [loadingSignOut, setLoadingSignOut] = (0,react_.useState)(false);
    const { company } = (0,useCompany/* default */.Z)();
    const primaryColor = company?.color.primary;
    const primaryLightColor = company?.color.primaryLight;
    const primaryVeryLightColor = company?.color.primaryVeryLight;
    const [homeHover, setHomeHover] = (0,react_.useState)(false);
    const [moneyHover, setMoneyHover] = (0,react_.useState)(false);
    const [cardHover, setCardHover] = (0,react_.useState)(false);
    const getColor = (condition, hoverState)=>{
        if (condition) {
            if (mode === "light") {
                return primaryColor;
            } else {
                return primaryLightColor;
            }
        } else {
            if (hoverState) {
                return primaryLightColor;
            } else {
                if (mode === "light") {
                    return "#334155";
                } else {
                    return "white";
                }
            }
        }
    };
    (0,react_.useEffect)(()=>{
        onClose();
    }, [
        onClose,
        pathName
    ]);
    const signOutHandler = async ()=>{
        setLoadingSignOut(true);
        try {
            await (0,react.signOut)();
            dist/* toast */.Am.success("Logged Out");
        } catch (error) {
            dist/* toast */.Am.error(error?.message);
            setLoadingSignOut(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Transition, {
                transition: "slide-left",
                duration: 400,
                mounted: isOpen,
                children: (styles)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: onClose,
                        style: styles,
                        className: "fixed z-40 bg-[#00000077] inset-0 sm:hidden"
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Transition, {
                transition: "slide-left",
                duration: 400,
                mounted: isOpen,
                children: (styles)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: styles,
                        className: `z-50 h-screen min-w-[260px] 
            w-[50vw] sm:hidden fixed right-0 
            flex flex-row py-24 px-7 gap-5
            ${mode === "light" ? "bg-white" : "bg-[#121212]"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `w-full h-full 
            flex flex-col gap-10 justify-between`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaTimes */.aHS, {
                                        onClick: onClose,
                                        className: `cursor-pointer
                  ${mode === "light" ? "text-slate-700" : "text-white"}`,
                                        size: 30
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col gap-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            onMouseEnter: ()=>setHomeHover(true),
                                            onMouseLeave: ()=>setHomeHover(false),
                                            style: {
                                                color: getColor(pathName.startsWith("/home"), homeHover)
                                            },
                                            onClick: ()=>router.push("/home"),
                                            className: `flex cursor-pointer 
        text-lg items-center gap-1 font-semibold`,
                                            children: [
                                                "Home",
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaHome */.xng, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            onMouseEnter: ()=>setMoneyHover(true),
                                            onMouseLeave: ()=>setMoneyHover(false),
                                            style: {
                                                color: getColor(pathName.startsWith("/send-money"), moneyHover)
                                            },
                                            onClick: ()=>router.push("/send-money"),
                                            className: `flex cursor-pointer text-lg 
                  items-center gap-1 font-semibold`,
                                            children: [
                                                "Send Money",
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaPaperPlane */.Y2X, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            onMouseEnter: ()=>setCardHover(true),
                                            onMouseLeave: ()=>setCardHover(false),
                                            style: {
                                                color: getColor(pathName.startsWith("/card"), cardHover)
                                            },
                                            onClick: ()=>router.push("/card"),
                                            className: `flex cursor-pointer text-lg items-center 
                  gap-1 font-semibold`,
                                            children: [
                                                "Cards",
                                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaCreditCard */.ypE, {})
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    onClick: signOutHandler,
                                    className: `flex items-center gap-3 
              cursor-pointer font-medium 
              ${mode === "light" ? "text-slate-700" : "text-white"}`,
                                    children: [
                                        "Sign Out",
                                        loadingSignOut ? /*#__PURE__*/ jsx_runtime_.jsx(cjs.Loader, {
                                            color: primaryLightColor
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaSignOutAlt */.fHX, {
                                            color: mode === "light" ? primaryColor : primaryLightColor
                                        })
                                    ]
                                })
                            ]
                        })
                    })
            })
        ]
    });
};
/* harmony default export */ const authenticated_MobileNavbar = (MobileNavbar);

;// CONCATENATED MODULE: ./components/authenticated/Container.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Container = ({ children })=>{
    const { mode } = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `justify-center 
    min-h-screen h-full pt-[7rem] px-4
    ${mode === "light" ? "bg-gray-100" : "bg-gray-100 transition-colors duration-500"}`,
        style: {
            flex: 1
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: children
        })
    });
};
/* harmony default export */ const authenticated_Container = (Container);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(41240);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(85228);
;// CONCATENATED MODULE: ./components/authenticated/Sidebar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function SideBar() {
    const pathName = (0,navigation.usePathname)();
    const navItems = [
        {
            route: "/home",
            label: "Dashboard "
        },
        {
            route: "/add-money",
            label: "Stake"
        },
        {
            route: "/send-money",
            label: "Withdraw"
        },
        {
            route: "/account",
            label: "Profile"
        },
        {
            route: "logout",
            label: "Logout"
        }
    ];
    const handleSignOut = ()=>{
        (0,react.signOut)();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "fixed w-56 h-full bg-black shadow-sm z-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center mt-6 mb-14",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "flex flex-shrink-0 items-center",
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col",
                children: navItems.map((item, index)=>item.route !== "logout" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: item.route,
                        className: `pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${pathName === item.route ? "bg-[#9D00FF] text-white" : "hover:bg-[#D3D3D3] text-white"}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mr-2",
                                children: [
                                    index === 0 && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        stroke: "currentColor",
                                        fill: "currentColor",
                                        strokeWidth: "0",
                                        viewBox: "0 0 1024 1024",
                                        className: "h-5 w-5",
                                        height: "1em",
                                        width: "1em",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 14.3-7.9 3.3-16.4 5-25 5H736v196c0 22.1-17.9 40-40 40H552c-22.1 0-40-17.9-40-40V640H392v196c0 22.1-17.9 40-40 40H196c-22.1 0-40-17.9-40-40V614.8H95.1c-17.9 0-33.6-7.2-45.3-18.9-11.8-11.7-18.9-27.3-18.9-45.3-.1-17.8 7.1-33.5 18.8-45.2l391-391c11.6-11.6 27.4-18.9 45-18.9 17.6 0 33.5 7.2 45 18.9l66.2 66.3 13.5-13.4c11.6-11.6 27.4-18.9 45-18.9 17.6 0 33.5 7.2 45 18.9l431.2 431c11.6 11.7 18.8 27.4 18.8 45.2-.1 17.9-7.2 33.6-18.9 45.3z"
                                        })
                                    }),
                                    index === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        stroke: "currentColor",
                                        fill: "currentColor",
                                        strokeWidth: "0",
                                        viewBox: "0 0 1024 1024",
                                        className: "h-5 w-5",
                                        height: "1em",
                                        width: "1em",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M682.4 455.7c-13.2-32.1-32-61.1-56.1-85.1-24-24-53-42.9-85.1-56.1-32.9-13.5-67.8-20.4-103.6-20.4s-70.7 6.9-103.6 20.4c-32.1 13.2-61.1 32-85.1 56.1-24 24-42.9 53-56.1 85.1-13.5 32.9-20.4 67.8-20.4 103.6s6.9 70.7 20.4 103.6c13.2 32.1 32 61.1 56.1 85.1 24 24 53 42.9 85.1 56.1 32.9 13.5 67.8 20.4 103.6 20.4s70.7-6.9 103.6-20.4c32.1-13.2 61.1-32 85.1-56.1 24-24 42.9-53 56.1-85.1 13.5-32.9 20.4-67.8 20.4-103.6s-7-70.7-20.4-103.6zM512 762c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M911.8 277.4C834.6 200.1 735.7 152 628.5 139.4v-65c0-30.9-25.1-56-56-56H451.5c-30.9 0-56 25.1-56 56v65c-107.1 12.5-206.1 60.7-283.4 138-93 93-144.2 216.5-144.2 348.1s51.2 255.1 144.2 348.1c93 93 216.5 144.2 348.1 144.2s255.1-51.2 348.1-144.2c93-93 144.2-216.5 144.2-348.1s-51.2-255.1-144.2-348.1zM512 938C276.3 938 86 747.7 86 512S276.3 86 512 86s426 190.3 426 426-190.3 426-426 426z"
                                            })
                                        ]
                                    }),
                                    index === 2 && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        stroke: "currentColor",
                                        fill: "currentColor",
                                        strokeWidth: "0",
                                        viewBox: "0 0 1024 1024",
                                        className: "h-5 w-5",
                                        height: "1em",
                                        width: "1em",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M839.2 202.2H184.8c-48.7 0-88.3 39.6-88.3 88.3v443c0 48.7 39.6 88.3 88.3 88.3h654.3c48.7 0 88.3-39.6 88.3-88.3v-443c0-48.7-39.6-88.3-88.2-88.3zM184.8 267.3h654.3c12 0 21.7 9.7 21.7 21.7v42.8H163.1v-42.8c0-12 9.7-21.7 21.7-21.7zM839.2 734.7H184.8c-12 0-21.7-9.7-21.7-21.7V428.3h697.8v284.8c0 12-9.7 21.6-21.7 21.6z"
                                        })
                                    }),
                                    index === 3 && /*#__PURE__*/ jsx_runtime_.jsx(bi_index_esm/* BiUser */.EDj, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm font-medium",
                                children: item.label
                            })
                        ]
                    }, index) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: `pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${pathName === item.route ? "bg-[#9D00FF] text-white" : "hover:bg-[#D3D3D3] text-white"}`,
                        onClick: handleSignOut,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mr-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaSignOutAlt */.fHX, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm font-medium",
                                children: item.label
                            })
                        ]
                    }, index))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/authenticated/ClientLayout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ClientLayout = ({ children })=>{
    const [isSidebarOpen, setSidebarOpen] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        // Ensure window is defined before using it
        if (false) {}
    }, []);
    const toggleSidebar = ()=>{
        setSidebarOpen(!isSidebarOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex min-h-screen",
        children: [
            isSidebarOpen && /*#__PURE__*/ jsx_runtime_.jsx(SideBar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex flex-1 flex-col ${isSidebarOpen ? "ml-56" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(authenticated_Navbar, {
                        toggleSidebar: toggleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(authenticated_MobileNavbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(authenticated_Container, {
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const authenticated_ClientLayout = (ClientLayout);


/***/ }),

/***/ 1012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(1215);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(23928);
// EXTERNAL MODULE: ./app/api/auth/[...nextauth]/route.ts
var route = __webpack_require__(92949);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./components/authenticated/ClientLayout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/components/authenticated/ClientLayout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ClientLayout = (__default__);
// EXTERNAL MODULE: ./node_modules/lottie-react/build/index.js
var build = __webpack_require__(80794);
// EXTERNAL MODULE: ./public/lottie/blocked-anim.json
var blocked_anim = __webpack_require__(31935);
// EXTERNAL MODULE: ./lib/mongoose.ts
var mongoose = __webpack_require__(45506);
// EXTERNAL MODULE: ./models/User.ts
var User = __webpack_require__(55911);
// EXTERNAL MODULE: ./components/Logout.tsx
var Logout = __webpack_require__(98114);
;// CONCATENATED MODULE: ./app/(authenticated)/layout.tsx
// "use client";





// import { useCallback, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";





const getUser = async (userId)=>{
    await (0,mongoose/* default */.Z)();
    const user = await User/* default */.Z.findById(userId);
    if (!user) {
        return "NO USER FOUND";
    } else {
        return user;
    }
};
const Layout = async ({ children })=>{
    // const { data: session } = useSession();
    const session = await (0,next_auth.getServerSession)(route.authOptions);
    if (!session?.user) return (0,navigation.redirect)("/login");
    const userId = (session?.user)?.id;
    const user = await getUser(userId);
    if (user === "NO USER FOUND") {
        return /*#__PURE__*/ jsx_runtime_.jsx(Logout/* default */.ZP, {});
    }
    if (user.status === "blocked") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex min-h-screen justify-center items-center flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(build/* default */.ZP, {
                    animationData: blocked_anim,
                    loop: false
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-2xl font-bold",
                    children: "Account Restricted"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-lg font-semibold",
                    children: "Contact Support to resolve any outstanding issue."
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(ClientLayout, {
        children: children
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 54668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/app/(authenticated)/loading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;