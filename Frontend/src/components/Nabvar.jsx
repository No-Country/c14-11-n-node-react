import { Link, useNavigate } from "react-router-dom";
import "../style/nabvar.css";
import { useAuth } from "../context/authContext";

const Nabvar = () => {
  
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const handleClick = async () => {
    await logout();
     navigate("/login")
  };

  return (
    <header className="container__nabvar">
      
    <div className="nabvar__title--icon">
    <Link to={"/"}>
        <i className="bx bx-md bx-movie-play icon_navbar"></i>
        </Link>
        
      {user && <h2 className="nabvar__title">Hola!!  {user?.email}</h2>}
      
    </div>
      {user ? (
        <button className="nabvar__btn" onClick={handleClick}>Cerrar sesion</button>
      ) : (
        <Link to={"/register"}>
          <button className="nabvar__btn" >Registrase</button>
          
        </Link>
      )}
    </header>
  );
};

export default Nabvar;
