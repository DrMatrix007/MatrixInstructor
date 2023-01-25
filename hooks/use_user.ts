import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getApp } from "firebase/app";

export const useUser = () => {
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    return onAuthStateChanged(getAuth(getApp()), (user) => {
      setUser(user);
    }, (e) => {
      console.error(e);
    });
  });
  return user;
};
