import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

export default function SignInPage({}: Props) {
  return (
    <>
      <div className=" min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className=" h-full lg:flex flex-col items-center justify-center px-4 bg-[#181818]">
          <div className=" text-center space-y-4 pt-16">
            <h1 className=" font-bold text-3xl text-white">
              Welcome to TLR Studios Form
            </h1>
            <p className=" text-base text-white">
              Sign in or Create an account to get started with{" "}
              <span className=" font-bold">TLR Studios</span>
            </p>
          </div>
          <div className="flex items-center justify-center mt-8 shadow-lg">
            <ClerkLoaded>
              <SignIn path="/sign-in" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className=" animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
        <div className="h-full bg-[#ff4a16] hidden lg:flex items-center justify-center">
          <Image src="/tlr_logo.png" width={100} height={100} alt="logo" />
        </div>
      </div>
    </>
  );
}
