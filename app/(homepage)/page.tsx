"use client";
import React from "react";
import Sidebar from "./sidebar";
import TopNav from "./topnav";
import Orders from "./orders";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <div className="flex h-screen bg-slate-800 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNav />
          <Orders />
        </div>
      </div>
    </>
  );
}
