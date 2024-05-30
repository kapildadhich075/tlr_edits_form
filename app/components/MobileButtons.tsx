import React from "react";

type Props = {};

export default function MobileButtons({}: Props) {
  return (
    <div className="flex flex-row justify-center gap-2 p-2">
      <button className="border-yellow-500 border-2 text-yellow-500  py-2 px-2 rounded-lg mt-5">
        Know More
      </button>
      <button className="bg-yellow-800 text-white  py-2 px-3 rounded-lg mt-5">
        Schedule Site Visit
      </button>
    </div>
  );
}
