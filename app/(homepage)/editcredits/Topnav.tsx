import Link  from "next/link";
import React, { SetStateAction, useState } from "react";

const Topnav = () => {
    const [activeLink, setActiveLink] = useState("");
    const handleLinkClick = (path: SetStateAction<string>) => {
        setActiveLink(path);
      };
  return (
    <div className="">
      <nav className="flex flex-row items-baseline bg-slate-50 text-zinc-500 px-6  ">
  <div className="flex space-x-4">
    <Link href="/editcredits">
      <span
        onClick={() => handleLinkClick("/editcredits")}
        className={`py-2 px-4 font-medium cursor-pointer ${
          activeLink === "/editcredits"
            ? 'text-red-500 border-b-2 border-red-500'
            : 'hover:text-red-500 hover:border-b-2 hover:border-red-500'
        }`}
      >
        Purchase Credit
      </span>
    </Link>
    <Link href="/editcredits/credithistory">
      <span
        onClick={() => handleLinkClick("/editcredits/credithistory")}
        className={`py-2 px-4 font-medium cursor-pointer ${
          activeLink === "/editcredits/credithistory"
            ? 'text-red-500 border-b-2 border-red-500'
            : 'hover:text-red-500 hover:border-b-2 hover:border-red-500'
        }`}
      >
        Credit History
      </span>
    </Link>
    <Link href="/editcredits/extendcredit">
      <span
        onClick={() => handleLinkClick("/editcredits/extendcredit")}
        className={`py-2 px-4 font-medium cursor-pointer ${
          activeLink === "/editcredits/extendcredit"
            ? 'text-red-500 border-b-2 border-red-500'
            : 'hover:text-red-500 hover:border-b-2 hover:border-red-500'
        }`}
      >
        Extend Credit
      </span>
    </Link>
  </div>
</nav>

    </div>
  );
};
export default Topnav;
function setActiveLink(path: React.SetStateAction<string>) {
    throw new Error("Function not implemented.");
}

