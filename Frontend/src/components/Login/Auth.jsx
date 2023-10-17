import "../../style/auth.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState} from "react";
import { auth, googleProvider } from "../../config/firebase";

const Auth = () => {
  //eastado para iniciar secion
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  //estado para registrase
  const [signUpInput, setSignUpInput] = useState({
    email: "",
    password: "",
  });

  //datos de inicio de secion
  const handleLoginChange = (event) => {
    setLoginInput({
      ...loginInput,
      [event.target.name]: event.target.value,
    });
  };

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

  //iniciar seccion con google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  // funcion para iniciar sesion
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

  const [renderRegister, setRenderRegister] = useState(false);

  const handleRegister = () => {
    setRenderRegister(!renderRegister);
    setRenderlogin(false); // Añade esta línea
  };

  const [renderLogin, setRenderlogin] = useState(false);

  const handleLogin = () => {
    setRenderlogin(!renderLogin);
    setRenderRegister(false); // Añade esta línea
  };

  return (
    //se agrego renderizado condicional para los dos moduls tanto el de 
    //inicio de secion comop para el registro falta agregar mas logica
    <div className="container__logginRegister">
       <div className="container_buttons_logginRegister">
       <button className="button_inicio_session" onClick={handleLogin}>Iniciar secion</button>
      <button  className="button__registro" onClick={handleRegister}>Registrarse</button>
     
       </div>
      {renderLogin ?
      ( 
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
         </section>):""
      }

    { renderRegister?  (<section className="registro">
        <input
          onChange={handleSignUpChange}
          placeholder="Email..."
          type="text"
          name="email"
          value={signUpInput.email}
        />
        <input
          onChange={handleSignUpChange}
          placeholder="Password..."
          type="password"
          name="password"
          value={signUpInput.password}
        />
        <button onClick={register}>Registrarse</button>
        <button className="googleBtn" onClick={signInWithGoogle}>
          Registrarse con Google
        </button>
      </section>):""}
    </div>
  );
};

export default Auth;
