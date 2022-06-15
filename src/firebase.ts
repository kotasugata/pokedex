// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylNYr1RnuDDLvblnzc9HXCYGBkYvFbxA",
  authDomain: "pokedex-22c88.firebaseapp.com",
  projectId: "pokedex-22c88",
  storageBucket: "pokedex-22c88.appspot.com",
  messagingSenderId: "823094968626",
  appId: "1:823094968626:web:c7466bdae6c3c85a88972b",
  measurementId: "G-RY7WKGZXDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;
