"use client";

import CalendlyModal from "@/app/_components/CalendlyModal";
import { ClerkLoading, ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

function FormHeader() {
  const [greeting, setGreeting] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setGreeting(`Hello, ${user.firstName}!`);
    }
  }, [user]);

  return (
    <div className="bg-[#fbf5ed] p-4 rounded-md w-full flex justify-between">
      <ClerkLoading>
        <Loader2 size={32} className="text-white animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <div className="flex items-center gap-2 bg-black p-2 rounded-xl">
          {user && (
            <span className=" text-white cursor-pointer">
              {user.firstName} {user.lastName}
            </span>
          )}
          <UserButton />
        </div>
      </ClerkLoaded>

      <button
        onClick={() => setOpenModal(true)}
        className=" px-4 py-2 bg-black text-white rounded-xl"
      >
        Schedule a meeting
      </button>

      {openModal && <CalendlyModal onClick={() => setOpenModal(false)} />}
    </div>
  );
}

export default FormHeader;
