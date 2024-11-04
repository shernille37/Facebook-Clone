"use client";

import { createContext, useRef, useContext, Children } from "react";
import { useStore } from "zustand";

import { createAuthStore } from "@/stores/AuthStore";

const AuthStoreContext = createContext(undefined);

export const AuthStoreProvider = ({ children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = createAuthStore();
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useAuthStore = (selector) => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error("useAuthStore must be used within MessageStoreProvider");
  }

  return useStore(authStoreContext, selector);
};
