import './auth.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useState } from 'react'
import { auth, googleProvider } from '../../config/firebase'

export const Auth = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setLoginInput({
      ...loginInput,
      [event.target.name]: event.target.value,
    })
  }

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        loginInput.email,
        loginInput.password
      )
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginInput.email,
        loginInput.password
      )
    } catch (error) {
      console.log(error)
    }
  }

  console.log(auth.currentUser)

  return (
    <div>
      {auth.currentUser?.email ?? (
        <section className="registro">
          <header>Registro</header>

          <input
            onChange={handleChange}
            placeholder="Email..."
            type="text"
            name="email"
            value={loginInput.email}
          />
          <input
            onChange={handleChange}
            placeholder="Password..."
            type="password"
            name="password"
            value={loginInput.password}
          />
          <button onClick={signIn}>Registrarse</button>

          <button className="googleBtn" onClick={signInWithGoogle}>
            Registrarse con Google
          </button>
        </section>
      )}
      <h4>Hay que separar el state de los inputs</h4>
      <section className="loggin">
        <header>Loggin</header>
        <input
          onChange={handleChange}
          placeholder="Email..."
          type="text"
          name="email"
          value={loginInput.email}
        />
        <input
          onChange={handleChange}
          placeholder="Password..."
          type="password"
          name="password"
          value={loginInput.password}
        />
        <button onClick={logIn}>Iniciar sesion</button>
        <button className="googleBtn" onClick={signInWithGoogle}>
          Iniciar sesion con Google
        </button>
        <button onClick={logOut}>Desloggearse</button>
      </section>
      {auth.currentUser?.email ? (
        <div>
          <h1>Estas loggeado con:</h1>
          <p>{auth.currentUser?.email}</p>
        </div>
      ) : (
        <h1>Todavia no te loggeaste</h1>
      )}
    </div>
  )
}
