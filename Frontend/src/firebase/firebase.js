// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATfhV3S-sXWzH-L4kPHnGSk6iqsTKv9c4",
  authDomain: "no-country-be2c3.firebaseapp.com",
  projectId: "no-country-be2c3",
  storageBucket: "no-country-be2c3.appspot.com",
  messagingSenderId: "1026130828696",
  appId: "1:1026130828696:web:389cc963d56373df3bdfed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);