"use client";
import React, { useEffect } from "react";
import useTheme from "../hooks/useTheme";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useTheme();

  return (
    <div
      className={`justify-center 
    min-h-screen h-full pt-[7rem] px-4
    ${
      mode === "light"
        ? "bg-gray-100"
        : "bg-gray-100 transition-colors duration-500"
    }`}
      style={{ flex: 1 }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Container;
