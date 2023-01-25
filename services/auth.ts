import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export const signInWithGoogle = async () => {
  const g = new GoogleAuthProvider();
  await signInWithRedirect(getAuth(), g);
};
