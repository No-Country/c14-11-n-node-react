// import { createContext, useContext, useEffect, useState } from "react";
// import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";

// export const authContext = createContext();

// export const useAuth = () => {
//   return useContext(authContext);
// };

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const logout = () => {
//     return signOut(auth);
//   };

//   const loginWithGoogle = () => {
//     const googleProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleProvider);
//   }

//   return (
//     <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>
//       {children}
//     </authContext.Provider>
//   );
// }

import { createContext, useContext, useEffect, useState } from "react";
import { signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Asegúrate de limpiar el estado del usuario después de cerrar la sesión
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      // Si el usuario ya está autenticado con otro método,
      // no permitir iniciar sesión con Google
      if (auth.currentUser) {
        console.log('Por favor, cierra la sesión actual antes de iniciar sesión con Google.');
        return;
      }
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
