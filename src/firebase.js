import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX-YdL2IkXTRMc0Z9_b3Oseod5wbj4sIQ",
  authDomain: "aj-pius.firebaseapp.com",
  projectId: "aj-pius",
  storageBucket: "aj-pius.firebasestorage.app",
  messagingSenderId: "130128784062",
  appId: "1:130128784062:web:83dd838bb4d83ef4dc4cef",
  measurementId: "G-JQ88ZRBZQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };