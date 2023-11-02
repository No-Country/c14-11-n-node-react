import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";
import ProtectedRouted from "./components/ProtectedRouted";
import Cards from "./pages/Cards";
import Error404 from "./pages/Error404";
import Nabvar from "./components/Nabvar";
import PlayMovies from "./pages/PlayMovies";
import Peliculas from "./pages/Peliculas";
import Series from "./pages/Series";
import PlaySeries from "./pages/PlaySeries";

//hey
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
          <Route
            path="/playmovies/:title"
            element={
              <ProtectedRouted>
                <PlayMovies />
              </ProtectedRouted>
            }
          />

          <Route
          path="/playseries/:title" element={
            <ProtectedRouted>
              <PlaySeries/>
            </ProtectedRouted>
          }/>

          <Route
            path="/peliculas"
            element={
              <ProtectedRouted>
                <Peliculas />
              </ProtectedRouted>
            }
          />

          <Route path="/series" element={<ProtectedRouted>
            <Series/>
          </ProtectedRouted>}/>

          <Route path="*" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
