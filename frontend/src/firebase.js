// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBO6hL921OYs3mRMTRbCYeeQ-imv8c7_7c",
    authDomain: "richpanel-ad3f8.firebaseapp.com",
    projectId: "richpanel-ad3f8",
    storageBucket: "richpanel-ad3f8.appspot.com",
    messagingSenderId: "371960735603",
    appId: "1:371960735603:web:fa47870d822c8eaad04706"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
