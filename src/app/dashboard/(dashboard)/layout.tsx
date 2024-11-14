"use client";

import React from "react";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import Header from "@/components/dashboard/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh flex">
      <DashboardSidebar />
      <div className="flex-grow ml-16">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
