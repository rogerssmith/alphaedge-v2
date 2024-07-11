"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaCreditCard, FaPaperPlane } from "react-icons/fa";
import { IoMdPerson, IoMdMenu } from "react-icons/io";
import useMobileNavbar from "../hooks/useMobileNavbar";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "../ThemeToggle";

import useCompany from "../hooks/useCompany";
type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const { onOpen } = useMobileNavbar();
  const { mode } = useTheme();

  const { company } = useCompany();
  const primaryColor = company?.color.primary;
  const primaryLightColor = company?.color.primaryLight;
  const primaryVeryLightColor = company?.color.primaryVeryLight;

  const [homeHover, setHomeHover] = useState(false);
  const [moneyHover, setMoneyHover] = useState(false);
  const [cardHover, setCardHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);

  const getColor = (condition: boolean, hoverState: boolean) => {
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

  return (
    <div className="fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms]">
      <div className="pl-4 md:pl-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    // <nav
    //   className={`shadow-lg flex justify-between
    // items-center px-4 sm:px-10 fixed
    // w-full py-3 z-30
    //  top-0 transition-colors duration-500
    // ${mode === "light" ? "bg-white" : "bg-[#121212]"}`}
    // >
    //   <Logo />

    //   <div className="sm:flex items-center gap-10 hidden">
    //     <div
    //       onMouseEnter={() => setHomeHover(true)}
    //       onMouseLeave={() => setHomeHover(false)}
    //       style={{
    //         color: getColor(pathName.startsWith("/home"), homeHover),
    //       }}
    //       onClick={() => router.push("/home")}
    //       className={`flex cursor-pointer
    //     text-lg items-center gap-1 font-semibold`}
    //     >
    //       Home
    //       <FaHome />
    //     </div>

    //     <div
    //       onMouseEnter={() => setMoneyHover(true)}
    //       onMouseLeave={() => setMoneyHover(false)}
    //       style={{
    //         color: getColor(pathName.startsWith("/send-money"), moneyHover),
    //       }}
    //       onClick={() => router.push("/send-money")}
    //       className={`flex cursor-pointer
    //     text-lg items-center gap-1 font-semibold

    //     `}
    //     >
    //       Send Money
    //       <FaPaperPlane />
    //     </div>

    //     <div
    //       onMouseEnter={() => setCardHover(true)}
    //       onMouseLeave={() => setCardHover(false)}
    //       style={{
    //         color: getColor(pathName.startsWith("/card"), cardHover),
    //       }}
    //       onClick={() => router.push("/card")}
    //       className={`flex cursor-pointer
    //     text-lg items-center gap-1 font-semibold`}
    //     >
    //       Cards
    //       <FaCreditCard />
    //     </div>
    //   </div>

    //   <div className="flex items-center gap-3">
    //     <ThemeToggle />

    //     <div
    //       onMouseEnter={() => setAccountHover(true)}
    //       onMouseLeave={() => setAccountHover(false)}
    //       style={{
    //         color: getColor(pathName.startsWith("/account"), accountHover),
    //       }}
    //       onClick={() => router.push("/account")}
    //       className={`flex cursor-pointer
    //     text-lg items-center gap-1 font-semibold`}
    //     >
    //       <span className="hidden sm:block">Account</span>
    //       <IoMdPerson size={22} />
    //     </div>

    //     <IoMdMenu
    //       onClick={onOpen}
    //       size={24}
    //       className={`sm:hidden cursor-pointer
    //       ${mode === "light" ? "text-slate-700" : "text-white"}`}
    //     />
    //   </div>
    // </nav>
  );
};

export default Navbar;
