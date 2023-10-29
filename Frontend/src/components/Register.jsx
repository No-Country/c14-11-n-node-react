import { useState, } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "../style/loginAndRegister.css";
import { motion } from "framer-motion";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signup(user.email, user.password);
      navigate("/login");
    } catch (error) {
      console.log(error);
      // Asignar el mensaje de error según el código que devuelve Firebase
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("El correo electrónico ya está en uso.");
          break;
        case "auth/invalid-email":
          setError("El formato del correo electrónico no es válido.");
          break;
        case "auth/operation-not-allowed":
          setError("El registro con email y contraseña no está habilitado.");
          break;
        case "auth/weak-password":
          setError(
            "La contraseña es demasiado débil. Por favor elige una contraseña más fuerte."
          );
          break;
        default:
          setError("Ocurrió un error al intentar registrarse.");
          break;
      }
    }
  };

  if (user) {
    navigate('/'); 
}

  return (
    <motion.div
      className="register"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {error && (
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="ragister_error"
        >
          {error}
        </motion.p>
      )}
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="email">
          Email
        </label>
        <input
          className="register__input"
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="email@email.com"
        />
        <label className="register__label" htmlFor="password">
          password
        </label>
        <input
          className="register__input"
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />
        <button className="register__button--submit">Register</button>
      </form>
    </motion.div>
  );
};

export default Register;
