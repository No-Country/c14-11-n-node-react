import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export default async function logoutUser() {
    try {
        const user = await signOut(auth);
         console.log(user);
    } catch (error) {
        console.log(error);
       
    }
}