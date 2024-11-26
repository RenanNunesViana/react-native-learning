import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpU61wVbl5UDcRUwVQ-afT0FAn9G0FLSk",
    authDomain: "study-app-2024-2.firebaseapp.com",
    projectId: "study-app-2024-2",
    storageBucket: "study-app-2024-2.firebasestorage.app",
    messagingSenderId: "949315200834",
    appId: "1:949315200834:web:2b85c465326a76064a4adb",
    measurementId: "G-4DPQEWEV8V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
