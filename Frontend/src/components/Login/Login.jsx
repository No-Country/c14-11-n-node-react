import { useState } from 'react'
import '../../style/auth.css'
import loginGoogle from '../../functions/loginWithGoogle';
import loginUser from '../../functions/login';

const Login = () => {
 const [islogingIn, setIslogingIn] = useState(false)

async function submitHandler  (e) {
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  console.log(email, password);
}


  return (
    <div className="container__loggin">
     <form onSubmit={submitHandler}>
       <input type="email" placeholder="Email" id='email' />
       <input type="password" placeholder="Password" id='password'/>
       <button type="submit">Login</button>
     </form>
    </div>
  );
};

export default Login;
