"use client";

import React from "react";
import TLREditsForm from "../_components/Cards";
import { AddonProvider } from "../_components/AddonContext";

const HomePage = () => {
  return (
    <>
      <AddonProvider>
        <TLREditsForm />
      </AddonProvider>
    </>
  );
};

export default HomePage;
