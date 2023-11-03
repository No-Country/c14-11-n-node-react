import { Link } from "react-router-dom";
import "../style/error404.css";
import cono from "../assets/cono.png";

const Error404 = () => {
  return (
    <div className="error__container">
      <img className="error__cono" src={cono} alt="" />
      <p className="error__text">
        La URL solicitada no se encontró en este servidor.
      </p>

      <Link to={"/"}>
        <button className="error__btn"> Regresar a inicio</button>
      </Link>
    </div>
  );
};

export default Error404;
