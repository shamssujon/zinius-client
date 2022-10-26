import React from "react";
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
    const user = { displayName: "Sujon" };

    // Google sign in
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const value = { user, googleSignIn };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
