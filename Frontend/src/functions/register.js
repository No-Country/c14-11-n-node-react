import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default async function resgisterUser(email, password) {
    try {
        createUserWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.log(error);
        return false
    }
}


