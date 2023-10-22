import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyAFQq4orXhWSbuFYJo0iITsCFEA8ilr7DA",
  authDomain: "clutterbuddies-40f85.firebaseapp.com",
  projectId: "clutterbuddies-40f85",
  storageBucket: "clutterbuddies-40f85.appspot.com",
  messagingSenderId: "898194430691",
  appId: "1:898194430691:web:37111bc64a089f022003d6",
  measurementId: "G-RJ04NCVVL2",
};


export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const databaseFire = getFirestore(firebaseApp);
export const authFire = getAuth(firebaseApp);
