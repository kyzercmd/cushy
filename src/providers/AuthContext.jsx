import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import app from "../firebase/firebase";

const UserContext = createContext();
const auth = getAuth(app);

export const UserAuth = () => {
  return useContext(UserContext);
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    console.log("observer running");
    const observer = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth changed");

      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      console.log("stopping");
      observer();
    };
  }, []);

  const AuthData = {
    user,
    createUser,
    setUser,
    signIn,
    logOut,
    updateProfile,
    loading,
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <UserContext.Provider value={AuthData}>{children}</UserContext.Provider>
  );
};
