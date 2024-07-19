import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/bgv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex items-center justify-center min-h-screen w-full z-10 relative">
        <div className="flex items-center justify-center w-full h-screen bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  );
}
