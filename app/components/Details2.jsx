import React from "react";

export default function Details2() {
  return (
    <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-1 items-center border-gray-400 border-r-2">
        <div className="flex flex-row gap-2 items-center">
          <h4 className="text-md font-medium text-black">Total Units</h4>
        </div>
        <p className="text-xs text-gray-500 font-extralight">968</p>
      </div>
      <div className="flex flex-col gap-1 items-center border-gray-400 border-r-2">
        <div className="flex flex-row gap-3 items-center">
          <h4 className="text-md font-medium text-black">Project Type</h4>
        </div>
        <p className="text-xs text-gray-500 font-extralight">
          Plotted Development
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center border-gray-400 border-r-2">
        <div className="flex flex-row gap-2 items-center">
          <h4 className="text-md font-medium text-black">Status</h4>
        </div>
        <p className="text-xs text-gray-500 font-extralight">Newly Launched</p>
      </div>
    </div>
  );
}
