import { adminAuth } from "@/lib/firebase-admin";
import { cookies } from "next/headers";
import { cache } from "react";

export const getCurrentUser = cache(async () => {
  try {
    const session = (await cookies()).get("token");

    if (!session) return null;

    const decoded = await adminAuth.verifyIdToken(session.value);

    const user = await adminAuth.getUser(decoded.uid);

    return {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      disabled: user.disabled,
      customClaims: user.customClaims,
      metadata: {
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
      },
    };
  } catch (error) {
    console.error("Error getting the User");
    return null;
  }
});
