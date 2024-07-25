import React from "react";
import FormHeader from "./_components/FormHeader";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="min-h-screen  p-2 lg:p-5 overflow-hidden h-screen bg-gradient-to-bl from-amber-500 to-amber-700">
      <div className=" py-6 sm:py-12 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-screen-2xl px-6 lg:px-8">
          <FormHeader />
          <div>{children}</div>
        </div>
        <footer className="text-center text-white text-sm mt-4">
          <p>&copy; 2024 TLR Studios L.L.P</p>
        </footer>
      </div>
    </main>
  );
}
