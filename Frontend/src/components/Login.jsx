// Importaciones de módulos y dependencias
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "../style/loginAndRegister.css"; // Estilos para el componente
import google from "../assets/google.svg"; // Icono de Google
import { motion } from "framer-motion"; // Biblioteca de animaciones

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
  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(userData.email, userData.password);
    } catch (error) {
      console.log(error);
      // Asignar el mensaje de error según el código que devuelve Firebase
      switch (error.code) {
        case "auth/invalid-email":
          setError("El formato del correo electrónico no es válido.");
          break;
        case "auth/user-disabled":
          setError("Este usuario ha sido deshabilitado.");
          break;
        case "auth/user-not-found":
          setError("No hay ningún usuario con ese correo electrónico.");
          break;
        case "auth/wrong-password":
          setError("La contraseña es incorrecta.");
          break;
        case "auth/email-already-in-use":
          setError("El correo electrónico ya está en uso por otro usuario.");
          break;
        case "auth/operation-not-allowed":
          setError(
            "El inicio de sesión con email y contraseña no está habilitado."
          );
          break;
        case "auth/too-many-requests":
          setError(
            "Hemos bloqueado todas las solicitudes de este dispositivo debido a actividad inusual. Inténtalo más tarde."
          );
          break;
        case "auth/network-request-failed":
          setError("Error de red. Verifica tu conexión e inténtalo de nuevo.");
          break;
        case "auth/password-strength":
          setError("La contraseña no es lo suficientemente fuerte.");
          break;
        case "auth/invalid-login-credentials":
          setError("Las credenciales de inicio de sesión no son inválidas.");
          break;
        default:
          setError("Ocurrió un error al intentar iniciar sesión.");
          break;
      }
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

  // // Redireccionar a la página de registro
  // const handldeRegister = () => {
  //   navigate("/register");
  // };
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
      {error && (
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="login__error"
        >
          {error}
        </motion.p>
      )}
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
        <button className="login__button login__button--submit">Iniciar sesion</button>
      </form>
      <button
        className="login__button login__button--google"
        onClick={handleGoogleSignin}
      >
        Iniciar sesion con google
        <img src={google} alt="" />
      </button>

   
    </motion.div>
  );
};

export default Login;
