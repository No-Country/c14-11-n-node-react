import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "../style/login.css";
import google from "../assets/google.svg"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

const handldeRegister = () => {
  navigate("/register");
}

  return (
    <div className="login">
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
        Login with Google <img src={google} alt="" />
      </button>

      <button  className="login__button--register" onClick={handldeRegister}>Registrarse</button>
    </div>
  );
};

export default Login;
