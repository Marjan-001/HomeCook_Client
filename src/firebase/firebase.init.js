// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWHal0JjdWXMccQIsZUTXcVHr_m00GtgI",
    authDomain: "homecook-ca296.firebaseapp.com",
    projectId: "homecook-ca296",
    storageBucket: "homecook-ca296.appspot.com",
    messagingSenderId: "926923767225",
    appId: "1:926923767225:web:3ad1617c92a7d50adb8a68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;