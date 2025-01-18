"use client";
import { auth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDataObj, setUserDataObj] = useState({});
  const [loading, setLoading] = useState(true);

  // AUTH HANDLERS
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setUserDataObj({});
    setCurrentUser(null);
    return signOut(auth);
  }

  useEffect(() => {
    try {
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
