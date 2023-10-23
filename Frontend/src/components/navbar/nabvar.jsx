
import { Link } from "react-router-dom"
import "../..//style/nabvar.css"
import logoutUser from "../../functions/logOut"




const Nabvar = () => {



  return (
    <div className="container__nabvar">

      <a href="/"><button>Home</button></a>

      <button onClick={logoutUser}>cerrar sesion</button>

      <div className="loginRegister">
        <Link
          to={"/login"}
        >
          <button>Inicio de Sesion</button>
        </Link>
        <Link
          to={"/register"}
        >
          <button >Registro</button>
        </Link>

      </div>

    </div>
  )
}

export default Nabvar