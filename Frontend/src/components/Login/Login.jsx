import { useState } from 'react'
import '../../style/auth.css'
// import loginGoogle from '../../functions/loginWithGoogle';
import loginUser from '../../functions/login';
import registerUser from '../../functions/register';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [islogingIn, setIslogingIn] = useState(false)

const navigate =useNavigate()
async function submitHandler(e) {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  console.log(email, password);

   if (islogingIn) {
    await loginUser(email, password)
   navigate('/card')
  } else {
    await registerUser(email, password)
    navigate('/login')
  }
 
}

  return (
    <div className="container__loginAndRegister">
      <h1>{islogingIn ? "Inicia sesion" : "Registrate"}</h1>
      <form onSubmit={submitHandler}>
        <label >Email</label>
        <input type="email" placeholder="Email" id='email' />
        <label >Password</label>
        <input type="password" placeholder="Password" id='password' />
        <button type="submit">{islogingIn? "Acceder" : 'Registrate'}</button>
      </form>
      <button onClick={()=> setIslogingIn(!islogingIn)}>
        {islogingIn? "No tienes cuenta? Crea una" : "Ya tienea cuenta? Accede" }
      </button>
    </div>
  );
};

export default Login;
