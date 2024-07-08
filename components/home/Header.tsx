"use client";
import React from "react";
import Logo from "../Logo";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import useCompany from "../hooks/useCompany";

const Header = () => {
  const { company } = useCompany();

  return (
    <div>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link
                className="flex flex-shrink-0 items-center mt-5"
                href={"/register"}
              >
                <Image
                  priority
                  src={"/logo.png"}
                  alt={"desktop"}
                  layout="responsive"
                  width={150}
                  height={200}
                />
              </Link>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div
                    className="relative inline-block text-left"
                    data-headlessui-state=""
                  >
                    <div>
                      <button
                        className="inline-flex w-full text-gray-400 justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-700"
                        id="headlessui-menu-button-:R3cm:"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        Select Language
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="-mr-1 h-5 w-5 text-gray-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
