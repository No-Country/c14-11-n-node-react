import { auth } from "../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";



export default async function loginGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    } catch (error) {
        console.log(error);

    }
}