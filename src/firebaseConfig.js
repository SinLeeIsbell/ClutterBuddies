// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4K9siKdI7gZEqmn1V17qGEQcAi6Jf_7I",
  authDomain: "trail-tales-f5fd9.firebaseapp.com",
  projectId: "trail-tales-f5fd9",
  storageBucket: "trail-tales-f5fd9.appspot.com",
  messagingSenderId: "977669159438",
  appId: "1:977669159438:web:bc378e28de0d1de59c5a5f",
  measurementId: "G-CG634W59E3",
};

// Initialize Firebase
//this is my own renaming
export const appInit = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appInit);


