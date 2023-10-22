import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";



export default async function loginUser(email, password) {
    try {
        signInWithEmailAndPassword(auth, email, password);
       
    } catch (error) {
        console.log(error);
        
    }
}