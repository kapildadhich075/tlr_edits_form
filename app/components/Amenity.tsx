import React from "react";
import { BookDashed, GlassWater } from "lucide-react";

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
        <h1 className="text-xl  text-yellow-800 font-light mt-5 md:text-2xl lg:text-3xl">
          30+ Amenities
        </h1>

        <div className="grid grid-cols-2 gap-10 mt-5 md:grid-cols-3 lg:grid-cols-2">
          {amenities.map((amenity, index) => (
            <div className="flex flex-row gap-2 items-center" key={index}>
              <BookDashed className="text-yellow-700" />
              <p className="text-sm  text-yellow-600">{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
