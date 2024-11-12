"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AuthWrapper = ({ children }) => {
  const router = useRouter();

  const { user, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setIsLoading(false);

      if (!user) router.push("/login");
    }
  }, [router, user, loading]);

  if (isLoading) return null;

  return children;
};

export default AuthWrapper;
