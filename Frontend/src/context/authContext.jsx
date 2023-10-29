// import { createContext, useContext, useEffect, useState } from "react";
// import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
// import { signOut } from "firebase/auth";



// export const authContext = createContext();

// export const useAuth = () => {
//   const context = useContext(authContext);
//   return context;
// };

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const signup = (email, password) => {
//     createUserWithEmailAndPassword(auth, email, password);
//   };

//   const login = (email, password) => {
//     signInWithEmailAndPassword(auth, email, password);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const logout = () => {
//     signOut(auth);
//   };

//   const loginWithGoogle = () => {
//    const  googleProvider = new GoogleAuthProvider()
//      return signInWithPopup(auth, googleProvider)
//   }

//   return (
//     <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>
//       {" "}
//       {children}{" "}
//     </authContext.Provider>
//   );
// }


import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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

  const logout = () => {
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
