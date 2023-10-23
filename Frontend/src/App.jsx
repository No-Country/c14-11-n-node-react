
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nabvar from './components/navbar/nabvar'
import { Footer } from '../src/components/footer/Footer'
import PlayMovie from "./pages/PlayMovie"
import Login from "./components/Login/Login"
import Card from "./components/card/card"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import Pages404 from "./pages/Pages404"


export default function App() {

  return (
    <div className='main__container'>
      <Nabvar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/card" element={<Card />} />
          <Route path="/playMovie/:playMovie" element={<PlayMovie />} />
        </Route>
        <Route path="*" element={<Pages404/>}/>
      </Routes>
      <Footer />
    </div>
  )
}
