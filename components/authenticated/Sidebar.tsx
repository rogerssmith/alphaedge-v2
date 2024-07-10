"use client";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const pathName = usePathname();
  const router = useRouter();

  // Define an array of navigation items with their respective routes and labels
  const navItems = [
    { route: "/home", label: "Home" },
    { route: "/send-money", label: "Send Money" },
    { route: "/card", label: "Cards" },
  ];

  return (
    <div className="fixed w-56 h-full bg-black shadow-sm z-10">
      <div className="flex justify-center mt-6 mb-14">
        <a className="flex flex-shrink-0 items-center" href="/">
          <Logo />
        </a>
      </div>
      <div className="flex flex-col">
        {navItems.map((item, index) => (
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
                    <path d="M512.1 172.6l-370 369.7h96V868H392V640c0-22.1 17.9-40 40-40h160c22.1 0 40 17.9 40 40v228h153.9V542.3H882L535.2 195.7l-23.1-23.1zm434.5 422.9c-6 6-13.1 10.8-20.8 14.3-7.9 3.3-16.4 5-25 5H736v196c0 22.1-17.9 40-40 40H552c-22.1 0-40-17.9-40-40V640H392v196c0 22.1-17.9 40-40 40H196c-22.1 0-40-17.9-40-40V614.8H95.1c-17.9 0-33.6-7.2-45.3-18.9-11.8-11.7-18.9-27.3-18.9-45.3-.1-17.8 7.1-33.5 18.8-45.2l391-391c11.6-11.6 27.4-18.9 45-18.9 17.6 0 33.5 7.2 45 18.9l66.2 66.3 13.5-13.4c11.6-11.6 27.4-18.9 45-18.9 17.6 0 33.5 7.2 45 18.9l431.2 431c11.7 11.6 18.9 27.3 18.8 45.1.1 17.8-7.1 33.5-18.8 45.2z"></path>
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M426.666,85.334c0-23.531-19.135-42.666-42.666-42.666H128C104.469,42.667,85.334,61.802,85.334,85.334V128c0,23.531,19.135,42.666,42.666,42.666h256c23.531,0,42.666-19.135,42.666-42.666V85.334z M426.666,213.333h-256c-23.531,0-42.666,19.135-42.666,42.667v42.667c0,23.531,19.135,42.667,42.666,42.667h256c23.531,0,42.666-19.135,42.666-42.667v-42.667C469.333,232.469,450.197,213.333,426.666,213.333z M213.334,341.334h-85.333C104.469,341.334,85.334,360.469,85.334,384v42.666C85.334,450.198,104.469,469.333,128,469.333h85.333C236.864,469.333,256,450.198,256,426.666V384C256,360.469,236.865,341.334,213.334,341.334z"></path>
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M96 128A64 64 0 1 0 96 0a64 64 0 1 0 0 128zm448 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM208 96a64 64 0 1 1 128 0 64 64 0 1 1-128 0zM0 416c0-70.7 57.3-128 128-128h64c29.1 0 55.7 9.8 77.4 26.2c-10.4 20.4-17.2 43.2-17.2 67.8c0 10.8 1.2 21.3 3.4 31.4c-16.6 7-35 10.6-54.6 10.6H64c-35.3 0-64-28.7-64-64zm416-32c0 10.8-1.2 21.3-3.4 31.4c16.6 7 35 10.6 54.6 10.6h96c35.3 0 64-28.7 64-64c0-70.7-57.3-128-128-128h-64c-29.1 0-55.7 9.8-77.4 26.2c10.4 20.4 17.2 43.2 17.2 67.8zm-93.3 93.3c2.2-10.1 3.4-20.6 3.4-31.4c0-88.4-71.6-160-160-160H128c-88.4 0-160 71.6-160 160c0 53 43 96 96 96h288c42.1 0 78.2-24.3 96.6-60.7c-9.8-3.5-19-8.2-27.3-13.9c-15.2 8.6-32.7 13.5-51.3 13.5c-33.6 0-63.1-17-80.6-43.3zm80.6-204.3c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128zm-128 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128z"></path>
                  </svg>
                )}
              </div>
              <div>
                <p className="text-sm">{item.label}</p>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
