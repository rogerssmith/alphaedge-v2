exports.id = 8977;
exports.ids = [8977];
exports.modules = {

/***/ 58846:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60144));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87182));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98186));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6037, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2377));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91164))

/***/ }),

/***/ 91164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ admin_Container)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/hooks/useTheme.ts
var useTheme = __webpack_require__(75678);
// EXTERNAL MODULE: ./node_modules/@mantine/core/cjs/index.js
var cjs = __webpack_require__(13162);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(16775);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(33518);
// EXTERNAL MODULE: ./components/ThemeToggle.tsx
var ThemeToggle = __webpack_require__(79167);
// EXTERNAL MODULE: ./components/Logo.tsx
var Logo = __webpack_require__(41240);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(85780);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(64348);
// EXTERNAL MODULE: ./components/hooks/useCompany.ts
var useCompany = __webpack_require__(61126);
;// CONCATENATED MODULE: ./components/admin/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












const AdminNavbar = ()=>{
    const { mode } = (0,useTheme/* default */.Z)();
    const pathName = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const [loadingSignOut, setLoadingSignOut] = (0,react_.useState)(false);
    const { company } = (0,useCompany/* default */.Z)();
    const primaryColor = company?.color.primary;
    const primaryLightColor = company?.color.primaryLight;
    const primaryVeryLightColor = company?.color.primaryVeryLight;
    const [homeHover, setHomeHover] = (0,react_.useState)(false);
    const [userHover, setUserHover] = (0,react_.useState)(false);
    const [transactionHover, setTransactionHover] = (0,react_.useState)(false);
    const [cardHover, setCardHover] = (0,react_.useState)(false);
    const [walletHover, setWalletHover] = (0,react_.useState)(false);
    const [coinHover, setCoinHover] = (0,react_.useState)(false);
    const [planHover, setPlanHover] = (0,react_.useState)(false);
    const [investmentHover, setInvestmentHover] = (0,react_.useState)(false);
    const [companyHover, setCompanyHover] = (0,react_.useState)(false);
    const [hover, setHover] = (0,react_.useState)({
        home: false,
        user: false,
        transaction: false,
        card: false,
        wallet: false,
        coin: false,
        plan: false,
        investment: false,
        company: false
    });
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
        className: `h-screen w-fit sm:min-w-[260px] 
            flex flex-row py-20 px-1 sm:px-7 gap-5 fixed overflow-auto
            ${mode === "light" ? "bg-[#ebebeb]" : "bg-[#3e3e3e]"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `w-full h-full 
            flex flex-col gap-10 justify-between`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-2 items-center w-full justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle/* default */.Z, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-5 items-center sm:items-start",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onMouseEnter: ()=>setHomeHover(true),
                            onMouseLeave: ()=>setHomeHover(false),
                            style: {
                                color: getColor(pathName?.startsWith("/admin/dashboard"), homeHover)
                            },
                            onClick: ()=>router.push("/admin/dashboard"),
                            className: `flex cursor-pointer text-lg 
            items-center gap-1 font-semibold`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaHome */.xng, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: "Home"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onMouseEnter: ()=>setUserHover(true),
                            onMouseLeave: ()=>setUserHover(false),
                            style: {
                                color: getColor(pathName.startsWith("/admin/users"), userHover)
                            },
                            onClick: ()=>router.push("/admin/users"),
                            className: `flex cursor-pointer text-lg 
            items-center gap-1 font-semibold`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(io_index_esm/* IoMdPerson */.hyG, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: "Users"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onMouseEnter: ()=>setTransactionHover(true),
                            onMouseLeave: ()=>setTransactionHover(false),
                            style: {
                                color: getColor(pathName.startsWith("/admin/transactions"), transactionHover)
                            },
                            onClick: ()=>router.push("/admin/transactions"),
                            className: `flex cursor-pointer text-lg 
            items-center gap-1 font-semibold`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdPayment */.c85, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: "Transactions"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onMouseEnter: ()=>setWalletHover(true),
                            onMouseLeave: ()=>setWalletHover(false),
                            style: {
                                color: getColor(pathName.startsWith("/admin/wallets"), walletHover)
                            },
                            onClick: ()=>router.push("/admin/wallets"),
                            className: `flex cursor-pointer text-lg items-center 
            gap-1 font-semibold`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaWallet */.OZg, {
                                    size: 24
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hidden sm:block",
                                    children: "Wallets"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cjs.Accordion, {
                            className: "w-full",
                            defaultValue: "Settings",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Accordion.Item, {
                                value: "flexibility",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Accordion.Control, {
                                        chevron: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaAngleDown */.iUH, {
                                            color: pathName.startsWith("/admin/settings") ? primaryLightColor : mode === "light" ? "#334155" : "white"
                                        }),
                                        className: `px-0 flex justify-center 
                ${mode == "light" ? "hover:bg-gray-100" : "hover:bg-gray-900"}`,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdSettings */.b9P, {
                                                    color: pathName.startsWith("/admin/settings") ? primaryLightColor : mode === "light" ? "#334155" : "white",
                                                    size: 24
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: `hidden sm:block ${mode == "light" ? "text-slate-700" : "text-white hidden sm:block"}`,
                                                    children: "Settings"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Accordion.Panel, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col gap-4 items-center sm:items-start",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    onMouseEnter: ()=>setCoinHover(true),
                                                    onMouseLeave: ()=>setCoinHover(false),
                                                    style: {
                                                        color: getColor(pathName.startsWith("/admin/settings/coins"), coinHover)
                                                    },
                                                    onClick: ()=>router.push("/admin/settings/coins"),
                                                    className: `flex cursor-pointer text-base items-center 
                    gap-2 font-semibold`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaCoins */.vAr, {
                                                            size: 20
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "hidden sm:block",
                                                            children: "Coins"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    onMouseEnter: ()=>setPlanHover(true),
                                                    onMouseLeave: ()=>setPlanHover(false),
                                                    style: {
                                                        color: getColor(pathName.startsWith("/admin/settings/plans"), planHover)
                                                    },
                                                    onClick: ()=>router.push("/admin/settings/plans"),
                                                    className: `flex cursor-pointer text-base items-center 
                    gap-2 font-semibold`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaMoneyCheckAlt */.EIQ, {
                                                            size: 20
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "hidden sm:block",
                                                            children: "Plans"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    onMouseEnter: ()=>setInvestmentHover(true),
                                                    onMouseLeave: ()=>setInvestmentHover(false),
                                                    style: {
                                                        color: getColor(pathName.startsWith("/admin/settings/investments"), investmentHover)
                                                    },
                                                    onClick: ()=>router.push("/admin/settings/investments"),
                                                    className: `flex cursor-pointer text-base items-center 
                    gap-2 font-semibold`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaPiggyBank */.Dfw, {
                                                            size: 20
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "hidden sm:block",
                                                            children: "Investments"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    onMouseEnter: ()=>setCompanyHover(true),
                                                    onMouseLeave: ()=>setCompanyHover(false),
                                                    style: {
                                                        color: getColor(pathName.startsWith("/admin/settings/company"), companyHover)
                                                    },
                                                    onClick: ()=>router.push("/admin/settings/company"),
                                                    className: `flex cursor-pointer text-base items-center 
                    gap-2 font-semibold`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaBuilding */.m17, {
                                                            size: 20
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "hidden sm:block",
                                                            children: "Company"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: signOutHandler,
                    className: `flex items-center justify-center sm:justify-start gap-3 
              cursor-pointer font-medium 
              ${mode === "light" ? "text-slate-700" : "text-white"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden sm:block",
                            children: "Sign Out"
                        }),
                        loadingSignOut ? /*#__PURE__*/ jsx_runtime_.jsx(cjs.Loader, {
                            color: mode === "light" ? primaryColor : primaryLightColor
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaSignOutAlt */.fHX, {
                            size: 20,
                            color: mode === "light" ? primaryColor : primaryLightColor
                        })
                    ]
                })
            ]
        })
    });
};
{
/* <Transition transition="slide-left" duration={400} mounted={isOpen}>
        {(styles) => (
          
        )}
      </Transition> */ }/* harmony default export */ const Navbar = (AdminNavbar);

;// CONCATENATED MODULE: ./components/admin/Container.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Container = ({ children })=>{
    const { mode } = (0,useTheme/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex w-full
    justify-center min-h-screen h-full py-2 pt-[3.5rem] pl-[22%] sm:pl-[260px]
    ${mode === "light" ? "bg-white text-slate-700" : " bg-[#121212] transition-colors duration-500 text-white"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "max-w-[95%] w-full",
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const admin_Container = (Container);


/***/ }),

/***/ 37463:
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
;// CONCATENATED MODULE: ./components/admin/Container.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/fishflow/Documents/Website Backup/Alpha Edge/new-alphaedge/alphaedge-v2/components/admin/Container.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Container = (__default__);
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
;// CONCATENATED MODULE: ./app/(admin)/layout.tsx
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
    // const userSession = session?.user as { role: string } | undefined;
    // const [user, setUser] = useState<userSchemaType>();
    if (!session?.user) (0,navigation.redirect)("/login");
    const userId = (session?.user)?.id;
    const user = await getUser(userId);
    if (user === "NO USER FOUND") {
        return /*#__PURE__*/ jsx_runtime_.jsx(Logout/* default */.ZP, {});
    }
    if (user.role !== "admin") (0,navigation.redirect)("/home");
    if (user && user.status === "blocked") {
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
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: children
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;