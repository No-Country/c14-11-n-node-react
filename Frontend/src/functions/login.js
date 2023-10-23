import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export default async function loginUser(email, password) {

  
    
    try {
    const login= await signInWithEmailAndPassword(auth, email, password);
       console.log(login);
    } catch (error) {
        console.log(error);
        
    }
}