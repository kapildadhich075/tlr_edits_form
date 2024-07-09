import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Navigation, Loader2, ShoppingBasketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header
        className=" bg-gradient-to-tl from-slate-900 to-slate-800 w-full
      px-4 py-6 "
      >
        <div className=" max-w-screen-2xl mx-auto">
          <div className=" w-full flex items-center justify-between ">
            <div className="flex items-end gap-2">
              <Image src="/tlr_logo.png" alt="Logo" width={60} height={60} />
              <h3>
                <span className="text-white font-thin italic text-lg">
                  Edits
                </span>
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Link href={"/form"}>
                <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2">
                  <ShoppingBasketIcon className="h-5 w-5 text-slate-800" />
                </button>
              </Link>
              <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
              </ClerkLoaded>
              <ClerkLoading>
                <Loader2 className="size-8 text-slate-400 animate-spin" />
              </ClerkLoading>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
