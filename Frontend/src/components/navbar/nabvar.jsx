
import { Link } from "react-router-dom"
import "../..//style/nabvar.css"


const Nabvar = () => {

 

  return (
    <div className="container__nabvar">

      <a href="/"><button>Home</button></a>

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