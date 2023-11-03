import { Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Cards from "./pages/Cards";
import Error404 from "./pages/Error404";
import Nabvar from "./components/Nabvar";
import PlayMovies from "./pages/PlayMovies";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import PlaySeries from "./pages/PlaySeries";

//hey
export default function App() {
   const pages = ['/cards','/playmovies','/playseries','/login','/register','/peliculas','/series','/']
  const navigate=useLocation();
  const path=navigate.pathname
 
  if(!pages.includes(path)){
    return(
     <Error404 />
    )
  }
  return (
    <div className="main__container">
      <AuthProvider>
        <Nabvar />
        <Routes>
       
          <Route element={<ProtectedRoutes />}>
           <Route path="/" element={<Home />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/playmovies/:title" element={<PlayMovies />} />
            <Route path="/playseries/:title" element={<PlaySeries />} />
            <Route path="/peliculas" element={<Peliculas/>} />
            <Route path="/series" element={<Series />} />
          </Route>
          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
