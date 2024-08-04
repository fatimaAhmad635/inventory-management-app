// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrO6mR9lIXMTr79IQG530bbGVxrloSkTE",
  authDomain: "inventory-management-bbfc3.firebaseapp.com",
  projectId: "inventory-management-bbfc3",
  storageBucket: "inventory-management-bbfc3.appspot.com",
  messagingSenderId: "368002427801",
  appId: "1:368002427801:web:ca169cdcd92335cbf88108",
  measurementId: "G-BMEHFY6VR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);
export {firestore}