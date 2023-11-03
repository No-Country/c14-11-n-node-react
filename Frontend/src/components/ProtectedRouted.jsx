import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import Loading from "../components/Loading"

const ProtectedRouted = ({children}) => {
const {user, loading } = useAuth()


if(loading)return <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Esto asegura que ocupe toda la altura de la pantalla
  }}>
    <Loading />
  </div>
if (!user) return <Navigate to={"/login"}/>



return(
    <>
    {children}
    </>
)


}

export default ProtectedRouted