'use client'
import React from "react";
import ChannelManagement from "./ChannelManagement";
import Sidebar from "../sidebar";
const page = () => {
  return (
    <>
        <div className="flex h-screen bg-slate-50 text-black ">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-y-auto ">
            <ChannelManagement />
          </div>
        </div>
    </>
  );
};

export default page;
