import React from "react";
import { Wallet } from "lucide-react";

export default function Details() {
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
      <div className="">
        <div className="flex flex-row gap-2 items-center">
          <Wallet size={20} />
          <h4 className="text-lg font-medium text-yellow-700">₹ 1.4 Cr.</h4>
        </div>
        <p className="text-xs text-gray-500">(₹ 6,990/ Sq. Ft.)</p>
      </div>
      <div className="">
        <div className="flex flex-row gap-2 items-center">
          <Wallet size={20} />
          <h4 className="text-lg font-medium text-yellow-700">₹ 1.4 Cr.</h4>
        </div>
        <p className="text-xs text-gray-500">3 Bathrooms</p>
      </div>
      <div className="">
        <div className="flex flex-row gap-2 items-center">
          <Wallet size={20} />
          <h4 className="text-lg font-medium text-yellow-700">₹ 1.4 Cr.</h4>
        </div>
        <p className="text-xs text-gray-500">3 Bathrooms</p>
      </div>
    </div>
  );
}
