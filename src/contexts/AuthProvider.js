import React from "react";
import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
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
    const [loading, setLoading] = useState(true);
    const [darkLight, setDarkLight] = useState(false);

    // Google sign in
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Create user with email/password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login with email/password
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Update User name and photo
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    // Email verification
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    };

    // Password reset
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // Log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("Auth state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Success toast
    const warningToast = (message) => {
        toast.success(message, {
            icon: "⚠",
            duration: 5000,
            position: "bottom-right",
            className:
                "!bg-slate-800 !dark:bg-slate-50 !dark:text-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };
    // Success toast
    const successToast = (message) => {
        toast.success(message, {
            duration: 4000,
            position: "bottom-right",
            className:
                "!bg-slate-800 !dark:bg-slate-50 !dark:text-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
        });
    };

    // Error toast
    const errorToast = (message) => {
        toast.error(message, {
            duration: 4000,
            position: "bottom-right",
            className:
                "!bg-slate-800 !dark:bg-slate-50 !dark:text-slate-800 !text-white !shadow !shadow-slate-500/20 !rounded-md",
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
        warningToast,
        updateUserProfile,
        loading,
        emailVerification,
        resetPassword,
        darkLight,
        setDarkLight,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
