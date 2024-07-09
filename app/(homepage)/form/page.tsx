"use client";

import React from "react";
import TastyEditsForm from "../../_components/Cards";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen flex justify-center items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/bgv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 bg-gray-900 bg-opacity-50 flex justify-center items-start w-full h-full">
          <div className="container mx-auto p-6  bg-opacity-50 rounded-lg max-h-2xl">
            <TastyEditsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
