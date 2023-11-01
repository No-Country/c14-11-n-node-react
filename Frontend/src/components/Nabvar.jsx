import { Link, useNavigate } from "react-router-dom";
import "../style/nabvar.css";
import { useAuth } from "../context/authContext";
import { useState } from "react";

const Nabvar = () => {
  const [login, setLogin] = useState(true);
  const { user, logout } = useAuth();

  console.log(user);
  const navigate = useNavigate();

  const handleClick = async () => {
    await logout();
    navigate("/login");
  };

  const handlelogin = () => {
    setLogin(!login);
    if (login === false) {
      navigate("/login");
    } else if (login === true) {
      navigate("/register");
    }
  };

  return (
    <header className="container__nabvar">
      <div className="nabvar__title--icon">
        <Link to={"/"}>
          <i className="bx bx-lg bx-movie-play icon_navbar"></i>
        </Link>

        {user && (
          <div className="nabvar__info_profile">
            <img src={user?.photoURL} alt="" />
            <h2 className="nabvar__title">{user?.email}</h2>
          </div>
        )}
      </div>

      {user ? (
        <div className="nabvar__container-btns">
           <Link className="nabvar__series" to={"/"}>Inicio</Link>
          <Link className="nabvar__series" to={"/series"}>Series</Link>
          <Link className="nabvar__peliculas" to={"/peliculas"}>Peliculas</Link>
          <button className="nabvar__btn" onClick={handleClick}>
            Cerrar sesion
          </button>
        </div>
      ) : (
        <button onClick={handlelogin} className="nabvar__btn">
          {login ? "Registrarse" : "Iniciar sesion"}
        </button>
      )}
    </header>
  );
};

export default Nabvar;
