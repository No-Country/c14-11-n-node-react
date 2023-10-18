import "../../style/auth.css";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";

const Auth = () => {


  //eastado para iniciar secion
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });


  //datos de inicio de sesion
  const handleLoginChange = (event) => {
    setLoginInput({
      ...loginInput,
      [event.target.name]: event.target.value,
    });
  };


  //iniciar seccion con google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };
  

  // funcion para iniciar sesion con datos del usuario
  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginInput.email,
        loginInput.password
      );
    } catch (error) {
      console.log(error);
    }
  };


  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };


  

  return (
    //se agrego renderizado condicional para los dos moduls tanto el de 
    //inicio de secion comop para el registro falta agregar mas logica
    <div className="container__logginRegister">
  

      <section className="loggin">
        <div></div>
        <input
          onChange={handleLoginChange}
          placeholder="Email..."
          type="text"
          name="email"
          value={loginInput.email}
        />
        <input
          onChange={handleLoginChange}
          placeholder="Password..."
          type="password"
          name="password"
          value={loginInput.password}
        />
        <button onClick={logIn}>Iniciar sesión</button>
        <button className="googleBtn" onClick={signInWithGoogle}>
          Iniciar sesión con Google
        </button>
        <button onClick={logOut}>Cerrar sesión</button>
      </section>


    </div>
  );
};

export default Auth;
