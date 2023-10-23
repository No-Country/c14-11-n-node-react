import { useState } from "react"
import {auth} from "../config/firebase"
import { onAuthStateChanged } from "firebase/auth"

import Login from "../components/Login/Login"
import { Outlet } from "react-router-dom"




const ProtectedRoutes = () => {


const [user, setUser] = useState(null)


onAuthStateChanged(auth, userFirebase => {
  
    if (userFirebase) {
        setUser(userFirebase)
    } else { 
        setUser(null)
    }
});


return user? <Outlet /> : <Login />

}

export default ProtectedRoutes


