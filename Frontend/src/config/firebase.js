{// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCZwdFhYp62JkNNz4_-dRudMAe2YpepeyI',
//   authDomain: 'filmflow-nocountry.firebaseapp.com',
//   projectId: 'filmflow-nocountry',
//   storageBucket: 'filmflow-nocountry.appspot.com',
//   messagingSenderId: '1007270316578',
//   appId: '1:1007270316578:web:3bf60047d948f5f16e587b',
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)

// export const auth = getAuth(app)
// export const googleProvider = new GoogleAuthProvider()

// export const db = getFirestore(app)
}


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7O3rHbkHYX5TAroLb2bhjJ4rzewAKmD4",
  authDomain: "no-country-2f7cb.firebaseapp.com",
  projectId: "no-country-2f7cb",
  storageBucket: "no-country-2f7cb.appspot.com",
  messagingSenderId: "469534421095",
  appId: "1:469534421095:web:5b9e302bafb69ee16724c2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;

