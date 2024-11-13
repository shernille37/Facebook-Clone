"use client";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

const Conversation = () => {
  const { user } = useAuth();

  return (
    <div className="flex p-2 justify-center lg:justify-between rounded-md my-3 cursor-pointer hover:bg-slate-200">
      {user && (
        <Image
          src={user.photoURL}
          height={500}
          width={500}
          alt="Profile Photo"
          className="size-10 rounded-full"
        />
      )}

      <div className="hidden lg:flex justify-center items-center">
        <p className="font-semibold text-base">Shernille Licud</p>
      </div>
    </div>
  );
};

export default Conversation;
