import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
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

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    //console.log("observer running");
    const observer = onAuthStateChanged(auth, (currentUser) => {
      //console.log("Auth changed");

      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      //console.log("stopping");
      observer();
    };
  }, []);

  const AuthData = {
    user,
    createUser,
    setUser,
    signIn,
    logOut,
    passwordReset,
    loading,
    updateProfile,
    googleSignIn,
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <UserContext.Provider value={AuthData}>{children}</UserContext.Provider>
  );
};
