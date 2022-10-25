// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_UEeypTcdT-SnrN6qDxSTAidpAclB8LI",
    authDomain: "zinius-e-learning.firebaseapp.com",
    projectId: "zinius-e-learning",
    storageBucket: "zinius-e-learning.appspot.com",
    messagingSenderId: "529003473377",
    appId: "1:529003473377:web:68112c8c289d19034c4aa0",
    measurementId: "G-67X5ME1P92",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;
