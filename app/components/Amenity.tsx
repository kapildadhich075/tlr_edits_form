import React from "react";
import { BookDashed } from "lucide-react";

export default function Amenity() {
  return (
    <div>
      <h1 className="text-xl  text-yellow-800 font-light mt-5 md:text-2xl lg:text-3xl">
        30+ Amenities
      </h1>

      <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-3 lg:grid-cols-2">
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <BookDashed className="text-yellow-700" />
          <p className="text-sm  text-yellow-600">Swimming Pool</p>
        </div>
      </div>
    </div>
  );
}
