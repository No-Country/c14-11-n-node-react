// Importaciones de módulos y dependencias
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "../style/loginAndRegister.css";  // Estilos para el componente
import google from "../assets/google.svg";  // Icono de Google
import { motion } from "framer-motion";  // Biblioteca de animaciones

const Login = () => {

  // Estado local para almacenar datos de usuario
  const [userData, setUser] = useState({
    email: "",
    password: "",
  });

  // Hooks del contexto de autenticación y navegación
  const { user, login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  // Estado local para manejar errores
  const [error, setError] = useState(null);

  // Actualizar el estado de userData con los cambios en los inputs
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...userData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(userData.email, userData.password);
      
    } catch (error) {
      const errorCode = error.code;
      setError(errorCode);
    }
  };

  // Redireccionar si el usuario ya está autenticado
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Inicio de sesión con Google
  const handleGoogleSignin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  // Redireccionar a la página de registro
  const handldeRegister = () => {
    navigate("/register");
  };
  return (
    <motion.div
      className="login"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {error && <p className="login__error">{error}</p>}
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          className="login__input login__input--email"
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="email@email.com"
        />
        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          className="login__input login__input--password"
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />
        <button className="login__button login__button--submit">Login</button>
      </form>
      <button
        className="login__button login__button--google"
        onClick={handleGoogleSignin}
      >
        Iniciar sesion con google
        <img src={google} alt="" />
      </button>

      <button className="login__button--register" onClick={handldeRegister}>
        Registrarse
      </button>
    </motion.div>
  );
};

export default Login;
