import React from "react";
import { useMediaQuery } from "react-responsive";

export default function DesktopButtons() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-2">
      {isDesktopOrLaptop && (
        <>
          <button className="border-yellow-500 border-2 text-yellow-500  py-2 px-20 rounded-lg mt-10">
            Chat Now
          </button>
          <button className=" border-yellow-500 border-2 text-yellow-500  py-2 px-20 rounded-lg mt-10">
            Schedule Visit
          </button>
          <button className="bg-yellow-800 text-white  py-2 px-16 rounded-lg mt-10">
            Schedule Site Visit
          </button>
        </>
      )}
    </div>
  );
}
