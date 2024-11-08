import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  // Set auth user to global state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      document.cookie = `token=${token}; path=/;`;
      router.push("/");
      return result.user;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError(error);
      throw error;
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      router.push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
      setError(error);
      throw error;
    }
  };

  return {
    user,
    error,
    setUser,
    setError,
    signInWithGoogle,
    signOut: signOutUser,
  };
}
