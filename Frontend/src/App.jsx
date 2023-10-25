import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { AuthProvider } from './context/authContext'
import ProtectedRouted from './components/ProtectedRouted'
import Cards from './pages/Cards'
import Error404 from './pages/Error404'
import Nabvar from './components/Nabvar'
import Filters from './components/Filters'

<<<<<<< HEAD



=======
//hayq ue hacer una vaca para comprarle un computador nueva Yoselin  :v
>>>>>>> f196ad8b132a7218a9a84c210a36b2290ea9cd09

export default function App() {
  return (
    <div className="main__container">
      <AuthProvider>
        <Nabvar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRouted>
                <Home />
                <Filters />
              </ProtectedRouted>
            }
          />
          <Route
            path="/cards"
            element={
              <ProtectedRouted>
                <Cards />
              </ProtectedRouted>
            }
          />
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </AuthProvider>
    </div>
  )
}
