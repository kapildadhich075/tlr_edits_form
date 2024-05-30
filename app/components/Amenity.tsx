import React from "react";
import { BookDashed } from "lucide-react";

export default function Amenity() {
  const amenities = [
    "Swimming Pool",
    "Gym",
    "Spa",
    "Restaurant",
    "Bar",
    "Tennis Court",
    "Game Room",
    "Conference Room",
  ];

  return (
    <>
      <div>
        <h1 className="text-xl  text-black font-light mt-5 md:text-2xl lg:text-3xl pl-5 md:p-0 lg:p-0">
          30+ Amenities
        </h1>

        <div className="grid grid-cols-2 gap-10 mt-5 md:grid-cols-2 lg:grid-cols-2 pl-5 md:p-0 lg:p-0">
          {amenities.map((amenity, index) => (
            <div className="flex flex-row gap-2 items-center" key={index}>
              <BookDashed className="text-yellow-500" />
              <p className="text-sm font-extralight  text-black">{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
