import React from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    // Google sign in
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // Password Authentication
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const value = { user, setUser, googleSignIn, createUser };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
