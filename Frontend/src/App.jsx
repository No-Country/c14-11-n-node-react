
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nabvar from './components/navbar/nabvar'
import Register from "./components/register/Register"
import {Footer} from '../src/components/footer/Footer'
import PlayMovie from "./pages/PlayMovie"
import Login from "./components/Login/Login"


export default function App() {

  return (
    <div className='main__container'>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route  path="/playMovie/:playMovie" element={<PlayMovie/>}/>
      </Routes>
       <Footer />
    </div>
  )
}
