"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function SideBar() {
  const pathName = usePathname();

  const navItems = [
    { route: "/home", label: "Home" },
    { route: "/send-money", label: "Withdraw" },
    { route: "/card", label: "Cards" },
    { route: "logout", label: "Sign Out" },
  ];

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="fixed w-56 h-full bg-black shadow-sm z-10">
      <div className="flex justify-center mt-6 mb-14">
        <a className="flex flex-shrink-0 items-center" href="/">
          <Logo />
        </a>
      </div>
      <div className="flex flex-col">
        {navItems.map((item, index) =>
          item.route !== "logout" ? (
            <Link key={index} href={item.route}>
              <button
                className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  pathName === item.route
                    ? "bg-[#9D00FF] text-white"
                    : "hover:bg-[#D3D3D3] text-white"
                }`}
              >
                <div className="mr-2">
                  {index === 0 && (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 14.3-7.9 3.3-16.4 5-25 5H736v196c0 22.1-17.9 40-40 40H552c-22.1 0-40-17.9-40-40V640H392v196c0 22.1-17.9 40-40 40H196c-22.1 0-40-17.9-40-40V614.8H95.1c-17.9 0-33.6-7.2-45.3-18.9-11.8-11.7-18.9-27.3-18.9-45.3-.1-17.8 7.1-33.5 18.8-45.2l391-391c11.6-11.6 27.4-18.9 45-18.9 17.6 0 33.5 7.2 45 18.9l66.2 66.3 13.5-13.4c11.6-11.6 27.4-18.9 45-18.9 17.6 0 33.5 7.2 45 18.9l431.2 431c11.6 11.7 18.8 27.4 18.8 45.2-.1 17.9-7.2 33.6-18.9 45.3z"></path>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M682.4 455.7c-13.2-32.1-32-61.1-56.1-85.1-24-24-53-42.9-85.1-56.1-32.9-13.5-67.8-20.4-103.6-20.4s-70.7 6.9-103.6 20.4c-32.1 13.2-61.1 32-85.1 56.1-24 24-42.9 53-56.1 85.1-13.5 32.9-20.4 67.8-20.4 103.6s6.9 70.7 20.4 103.6c13.2 32.1 32 61.1 56.1 85.1 24 24 53 42.9 85.1 56.1 32.9 13.5 67.8 20.4 103.6 20.4s70.7-6.9 103.6-20.4c32.1-13.2 61.1-32 85.1-56.1 24-24 42.9-53 56.1-85.1 13.5-32.9 20.4-67.8 20.4-103.6s-7-70.7-20.4-103.6zM512 762c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120z"></path>
                      <path d="M911.8 277.4C834.6 200.1 735.7 152 628.5 139.4v-65c0-30.9-25.1-56-56-56H451.5c-30.9 0-56 25.1-56 56v65c-107.1 12.5-206.1 60.7-283.4 138-93 93-144.2 216.5-144.2 348.1s51.2 255.1 144.2 348.1c93 93 216.5 144.2 348.1 144.2s255.1-51.2 348.1-144.2c93-93 144.2-216.5 144.2-348.1s-51.2-255.1-144.2-348.1zM512 938C276.3 938 86 747.7 86 512S276.3 86 512 86s426 190.3 426 426-190.3 426-426 426z"></path>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      className="h-5 w-5"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M839.2 202.2H184.8c-48.7 0-88.3 39.6-88.3 88.3v443c0 48.7 39.6 88.3 88.3 88.3h654.3c48.7 0 88.3-39.6 88.3-88.3v-443c0-48.7-39.6-88.3-88.2-88.3zM184.8 267.3h654.3c12 0 21.7 9.7 21.7 21.7v42.8H163.1v-42.8c0-12 9.7-21.7 21.7-21.7zM839.2 734.7H184.8c-12 0-21.7-9.7-21.7-21.7V428.3h697.8v284.8c0 12-9.7 21.6-21.7 21.6z"></path>
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </Link>
          ) : (
            <button
              key={index}
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                pathName === item.route
                  ? "bg-[#9D00FF] text-white"
                  : "hover:bg-[#D3D3D3] text-white"
              }`}
              onClick={handleSignOut}
            >
              <div className="mr-2">
                <FaSignOutAlt />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          )
        )}
      </div>
    </div>
  );
}
