"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { signInWithGoogle, user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center bg-slate-200 h-screen">
      <div className="bg-white rounded-lg p-5 w-full lg:w-1/3 md:w-1/2">
        <div className="flex flex-col">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            alt="Facebook Logo"
            width={1000}
            height={1000}
            className="object-contain h-[150px]"
          />

          <Image
            src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
            alt="Facebook"
            width={1000}
            height={1000}
            className="object-contain h-[150px]"
          />

          <button
            onClick={signInWithGoogle}
            className="p-2 bg-blue-600 rounded-lg text-white text-lg"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
