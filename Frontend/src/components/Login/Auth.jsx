import '../../style/auth.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { auth, googleProvider } from '../../config/firebase';

const Auth = () => {

  //eastado para iniciar secion
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });

  //estado para registrase
  const [signUpInput, setSignUpInput] = useState({
    email: '',
    password: '',
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
      await createUserWithEmailAndPassword(auth, signUpInput.email, signUpInput.password);
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
      await signInWithEmailAndPassword(auth, loginInput.email, loginInput.password);
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

    //hacer logica para mostrar login y boton para registrarse o separar por componente y rutas 👌
    <div>
        <section className="registro">
          <header>Registro</header>
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
        </section>

        <section className="loggin">
          <header>Login</header>
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











// import '../../style/auth.css'
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from 'firebase/auth'
// import { useState } from 'react'
// import { auth, googleProvider } from '../../config/firebase'

// const Auth = () => {
//   const [loginInput, setLoginInput] = useState({
//     email: '',
//     password: '',
//   })

//   const [signUp, setSignUp] = useState({
//     email: '',
//     password: '',
//   })




//   const handleLogin = (event) => {
//     setLoginInput({
//       ...loginInput,
//       [event.target.name]: event.target.value,
//     })
//   }


//   const handleSingUp = (event) => {
//     setSignUp({
//       ...signUp,
//       [event.target.name]: event.target.value,
//     })
//   }

//   const signIn = async () => {
//     try {
//       await createUserWithEmailAndPassword(
//         auth,
//         signUp.email,
//         signUp.password
//       )
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const logOut = async () => {
//     try {
//       await signOut(auth)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const logIn = async () => {
//     try {
//       await signInWithEmailAndPassword(
//         auth,
//         loginInput.email,
//         loginInput.password
//       )
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div>
//       {auth.currentUser?.email ?? (
//         <section className="registro">
//           <header>Registro</header>

//           <input
//             onChange={handleSingUp}
//             placeholder="Email..."
//             type="text"
//             name="email"
//             value={loginInput.email}
//           />
//           <input
//             onChange={handleSingUp}
//             placeholder="Password..."
//             type="password"
//             name="password"
//             value={loginInput.password}
//           />
//           <button onClick={signIn}>Registrarse</button>

//           <button className="googleBtn" onClick={signInWithGoogle}>
//             Registrarse con Google
//           </button>
//         </section>
//       )}
//       <h4>Hay que separar el state de los inputs</h4>
//       <section className="loggin">
//         <header>Loggin</header>
//         <input
//           onChange={handleLogin}
//           placeholder="Email..."
//           type="text"
//           name="email"
//           value={loginInput.email}
//         />
//         <input
//           onChange={handleLogin}
//           placeholder="Password..."
//           type="password"
//           name="password"
//           value={loginInput.password}
//         />
//         <button onClick={logIn}>Iniciar sesion</button>
//         <button className="googleBtn" onClick={signInWithGoogle}>
//           Iniciar sesion con Google
//         </button>
//         <button onClick={logOut}>Desloggearse</button>
//       </section>
//       {auth.currentUser?.email ? (
//         <div>
//           <h1>Estas loggeado con:</h1>
//           <p>{auth.currentUser?.email}</p>
//         </div>
//       ) : (
//         <h1>Todavia no te loggeaste</h1>
//       )}
//     </div>
//   )
// }


// export default  Auth