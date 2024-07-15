"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/authenticated/Navbar";
import MobileNavbar from "@/components/authenticated/MobileNavbar";
import Container from "@/components/authenticated/Container";
import SideBar from "@/components/authenticated/Sidebar";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {isSidebarOpen && <SideBar />}
      <div className={`flex flex-1 flex-col ${isSidebarOpen ? "ml-56" : ""}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <MobileNavbar />
        <Container>{children}</Container>
      </div>
    </div>
  );
};

export default ClientLayout;
