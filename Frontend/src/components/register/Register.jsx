import { createUserWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useState } from "react";
import "../../style/register.css"


const Register = () => {

    //estado para registrase
    const [signUpInput, setSignUpInput] = useState({
        email: "",
        password: "",
    });

    // datos de registro
    const handleSignUpChange = (event) => {
        setSignUpInput({
            ...signUpInput,
            [event.target.name]: event.target.value,
        });
    };


    //funcion de registro
    const register = async () => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                signUpInput.email,
                signUpInput.password
            );
        } catch (error) {
            console.log(error);
        }
    };


    //registrarse con google
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div>
            <section className="registro">
                <h1>Resgistre</h1>
                <input
                    onChange={handleSignUpChange}
                    placeholder="Email..."
                    type="text"
                    name="email"
                    value={signUpInput.email}
                    className="input_registre "
                />
                <input
                    onChange={handleSignUpChange}
                    placeholder="Password..."
                    type="password"
                    name="password"
                    value={signUpInput.password}
                    className="input_registre "
                />
                <button className="button_registre " onClick={register}>Registrarse</button>
                <button className="button_registre " onClick={signInWithGoogle}>
                    Registrarse con Google
                </button>
            </section>
        </div>
    )
}

export default Register