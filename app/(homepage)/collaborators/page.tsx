import React from "react";
import Sidebar from "../sidebar";
import Collaborators from "./Collaborators";

const page = () => {
  return (
    <>
      <div className="flex h-screen bg-slate-50 text-black ">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Collaborators />
        </div>
      </div>
    </>
  );
};

export default page;
