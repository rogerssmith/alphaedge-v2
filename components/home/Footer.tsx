"use client";
import React from "react";
import useCompany from "../hooks/useCompany";
import Logo from "../Logo";

const Footer = () => {
  const { company } = useCompany();

  const date = new Date();
  return (
    <footer className="bg-black text-white">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <div className="text-3xl text-blue-500 font-bold">
              <Logo />
            </div>
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-8 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div
            className="lg:w-1/4 md:w-1/2 w-full px-4"
            style={{ opacity: "1", transform: "none" }}
          >
            <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="mb-2 cursor-pointer" href="/">
                  Home
                </a>
              </li>
              <li className="mb-2 cursor-pointer">Privacy Policy</li>
              <li>
                <a className="mb-2 cursor-pointer" href="/terms">
                  Terms and Conditions
                </a>
              </li>
            </nav>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 w-full px-4"
            style={{ opacity: "1", transform: "none" }}
          >
            <h2 className="font-semibold text-lg mb-3">Support</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="mb-2 cursor-pointer" href="/login">
                  Register
                </a>
              </li>
            </nav>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 w-full px-4"
            style={{ opacity: "1", transform: "none" }}
          >
            <h2 className="font-semibold text-lg mb-3">Contact Us</h2>
            <nav className="list-none mb-10">
              {/* <li className="mb-2 cursor-pointer">+1 (508) 496-3395</li> */}
              <li className="mb-2 cursor-pointer">support@alphaedgelabs.com</li>
              <li className="mb-2 cursor-pointer">{company?.address}</li>
            </nav>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 w-full px-4"
            style={{ opacity: "1", transform: "none" }}
          >
            <h2 className="font-semibold text-lg mb-3">Social Media</h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="https://x.com/AssetsHedge"
                  className="hover:text-[#9D00FF] flex items-center space-x-2"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                  <span>Twitter</span>
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-6 px-5 align-center text-center">
          <p className="text-base text-center">
            Copyright © {company?.name} {date.getFullYear()}
          </p>
        </div>
      </div>
    </footer>
    // <footer
    //   className="flex justify-center py-7
    // bg-[#050704] text-center px-5 sm:px-10 md:px-20"
    // >
    //   © {date.getFullYear()} {company?.name}, {company?.address}
    // </footer>
  );
};

export default Footer;
