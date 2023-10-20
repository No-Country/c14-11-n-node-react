
import { Link } from "react-router-dom"
import "../..//style/nabvar.css"


const Nabvar = () => {

 

  return (
    <div className="container__nabvar">

      <a href="/"><button className="button__nabvar">Home</button></a>

    <div className="loginRegister">
    <Link
        to={"/login"}
      >
        <button className="button__nabvar">Inicio de Sesion</button>
      </Link>
      <Link
        to={"/register"}
      >
        <button  className="button__nabvar">Registro</button>
      </Link>

    </div>

    </div>
  )
}

export default Nabvar