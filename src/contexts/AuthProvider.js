import React from "react";
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(firebaseApp);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Google sign in
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };

    // Create user with email/password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login with email/password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Update User name and photo 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };

    // Log out
    const logOut = () => {
        return signOut(auth);
    };

    // Onserver
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth state changed", currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Success toast
    const successToast = (message) => {
        toast.success(message, {
            duration: 4000,
            position: "top-center",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    // Error toast
    const errorToast = (message) => {
        toast.error(message, {
            duration: 4000,
            position: "bottom-right",
            className: "!bg-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    const value = {
        user,
        setUser,
        createUser,
        providerLogin,
        logIn,
        logOut,
        successToast,
        errorToast,
        updateUserProfile
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
