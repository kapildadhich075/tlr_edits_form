import React from "react";
import MobileButtons from "./MobileButtons";
import Amenity from "./Amenity";

export default function FixedCard() {
  return (
    <div className="rounded-t-lg  shadow-md flex justify-center flex-col items-center  ">
      <MobileButtons />
      <Amenity />
      <img
        src="/image.png"
        alt="Luxury Home"
        className="mt-3 shadow-lg object-cover w-[550px] h-[250px] "
      />
    </div>
  );
}
