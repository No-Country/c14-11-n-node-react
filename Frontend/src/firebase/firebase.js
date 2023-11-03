// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZwdFhYp62JkNNz4_-dRudMAe2YpepeyI',
  authDomain: 'filmflow-nocountry.firebaseapp.com',
  projectId: 'filmflow-nocountry',
  storageBucket: 'filmflow-nocountry.appspot.com',
  messagingSenderId: '1007270316578',
  appId: '1:1007270316578:web:3bf60047d948f5f16e587b',
}
// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
