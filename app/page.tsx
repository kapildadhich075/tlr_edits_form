"use client";

import React, { useState } from "react";

import ProjectDetails from "./components/ProjectDetails";

const HomePage = () => {
  return (
    <div className=" flex flex-col justify-center align-middle max-w-full ">
      <ProjectDetails />
    </div>
  );
};

export default HomePage;
