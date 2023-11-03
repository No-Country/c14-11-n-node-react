import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/authContext"
import Loading from "./Loading"

const ProtectedRouted = ({children}) => {
const {user, loading } = useAuth()


if(loading)return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  }}>
    <Loading />
  </div>
if (!user) return <Navigate to={"/login"}/>
if (user) return <Outlet/>


return(
    <>
    {children}
    </>
)


}

export default ProtectedRouted