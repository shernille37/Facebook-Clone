import { createStore } from "zustand";

const defaultInitState = {
  user: null,
  loading: true,
  error: null,
};

export const createAuthStore = (initState = defaultInitState) => {
  return createStore((set) => ({
    ...initState,
    setAuthUser: (res) =>
      set((state) => ({ user: res, loading: false, error: null })),
    setError: (err) => set((state) => ({ error: err })),
  }));
};
