import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
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
        <div className=" p-6  bg-opacity-50 rounded-lg max-h-2xl relative z-10 flex justify-center  items-start w-full gap-4 min-h-full bg-slate-800/50">
          {children}
        </div>
      </div>
    </>
  );
}
