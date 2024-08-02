"use client";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (path: SetStateAction<string>) => {
    setActiveLink(path);
  };
  

  return (
    <>
    <div className="w-64 border-r-2 border-gray bg-slate text-black flex flex-col ">
      <nav className="pt-4 pb-4 pr-4 space-y-4 flex flex-col font-normal">
        <Link href="/">
          <div
            onClick={() => handleLinkClick("/")}
            className={`flex py-2 px-4 rounded ${
              activeLink === "/" ? "bg-orange-200" : "hover:bg-orange-200"
            }`}
          >
           <LibraryBooksOutlinedIcon/> &nbsp; Orders
          </div>
        </Link>
        <Link href="/editcredits">
          <div
            onClick={() => handleLinkClick("/editcredits")}
            className={`block py-2 px-4 rounded ${
              activeLink === "/editcredits"
                ? "bg-orange-200"
                : "hover:bg-orange-200"
            }`}
          >
           <PaidOutlinedIcon/>&nbsp; Edit Credits
          </div>
        </Link>
        <Link href="/channelmanagement">
          <div
            onClick={() => handleLinkClick("/channelmanagement")}
            className={`block py-2 px-4 rounded ${
              activeLink === "/channelmanagement"
                ? "bg-orange-200"
                : "hover:bg-orange-200"
            }`}
          >
           <OndemandVideoOutlinedIcon/>&nbsp; Channel Management
          </div>
        </Link>
        <Link href="/teamchat">
          <div
            onClick={() => handleLinkClick("/teamchat")}
            className={`block py-2 px-4 rounded ${
              activeLink === "/teamchat"
                ? "bg-orange-200"
                : "hover:bg-orange-200"
            }`}
          >
          <ChatBubbleOutlineOutlinedIcon/>&nbsp;  Team Chat
          </div>
        </Link>
        <Link href="/collaborators">
          <div
            onClick={() => handleLinkClick("/collaborators")}
            className={`block py-2 px-4 rounded ${
              activeLink === "/collaborators"
                ? "bg-orange-200"
                : "hover:bg-orange-200"
            }`}
          >
           <PeopleAltOutlinedIcon/>&nbsp; Collaborators
          </div>
        </Link>
        <Link href="/support">
          <div
            onClick={() => handleLinkClick("/support")}
            className={`block py-2 px-4 rounded ${
              activeLink === "/support"
                ? "bg-orange-200"
                : "hover:bg-orange-200"
            }`}
          >
           <HelpOutlineOutlinedIcon/>&nbsp; Support
          </div>
        </Link>
      </nav>

      <div className="p-4 mt-28">
         <div className="relative">
      <div
        className="flex items-center mb-4 p-1.5 border-2 border-gray-400 rounded cursor-pointer"
      >
        <span className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-white">
          D
        </span>
        <div className="ml-2">
          <p className="text-sm">Default</p>
          <p className="text-xs text-gray-400">0 credits</p>
        </div>
        <div className="ml-auto">
          <svg
            className={`w-4 h-4 transition-transform transform`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
        <Link href="/form">
          <div className="bg-transparent border border-red-500 text-red-500 py-2 px-4 rounded w-full hover:bg-slate-100 cursor-pointer">
            + Start New Order
          </div>
        </Link>
        <div className="flex items-center mb-4 py-4 mt-4 pt-4 border-t">
          <span className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold">
            A
          </span>
          <div className="ml-2">
            <p className="text-sm">UserNAME</p>
            <p className="text-xs text-gray-400">Client</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
