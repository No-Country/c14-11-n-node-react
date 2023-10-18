
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Nabvar from './components/navbar/nabvar'
import Auth from "./components/Login/Auth"
import Register from "./components/register/Register"


export default function App() {

  return (
    <div className='main__container'>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}
