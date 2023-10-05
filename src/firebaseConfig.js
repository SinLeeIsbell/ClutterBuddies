import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFQq4orXhWSbuFYJo0iITsCFEA8ilr7DA",
  authDomain: "clutterbuddies-40f85.firebaseapp.com",
  projectId: "clutterbuddies-40f85",
  storageBucket: "clutterbuddies-40f85.appspot.com",
  messagingSenderId: "898194430691",
  appId: "1:898194430691:web:37111bc64a089f022003d6",
  measurementId: "G-RJ04NCVVL2"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const auth = getAuth(app)
