import React from "react";
import MobileButtons from "./MobileButtons";

export default function FixedCard() {
  return (
    <div className="rounded-t-lg bg-gray-100 flex justify-center flex-col items-center  ">
      <MobileButtons />

      <img
        src="/image.png"
        alt="Luxury Home"
        className="mt-5 shadow-lg object-cover w-[550px] h-[250px] rounded-lg"
      />
    </div>
  );
}
