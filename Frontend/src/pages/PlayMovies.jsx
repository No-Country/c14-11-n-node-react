{
  // // Importando las bibliotecas necesarias.
  // import axios from "axios"; // Para realizar peticiones HTTP.
  // import YouTube from "react-youtube"; // Componente para embeber videos de YouTube.
  // import "../style/trailersMovies.css"; // Estilos específicos para este componente.
  // import { useState, useEffect } from "react"; // Ganchos de estado y efectos de React.
  // import { useNavigate, useParams } from "react-router-dom"; // Gancho para acceder a parámetros de ruta.
  // const Playmovies = () => {
  //   // Utilizando el gancho useParams para obtener el título desde la URL.
  //   const { title } = useParams();
  //   // Constantes de configuración de la API.
  //   const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  //   const API_URL = "https://api.themoviedb.org/3";
  //   const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  //   // Estado para almacenar datos del trailer, película y si el video está reproduciéndose.
  //   const [trailer, setTrailer] = useState(null);
  //   const [movie, setMovie] = useState(null);
  //   const [playing, setPlaying] = useState(true);
  //   const navigate = useNavigate();
  //   // Gancho useEffect que se ejecuta cuando el componente se monta.
  //   useEffect(() => {
  //     // Función para buscar una película por el título proporcionado en la URL.
  //     const fetchMovieByTitle = async () => {
  //       try {
  //         // Realizar petición a la API para buscar la película por título.
  //         const response = await axios.get(`${API_URL}/search/movie`, {
  //           params: {
  //             api_key: API_KEY,
  //             query: title,
  //           },
  //         });
  //         // Establecer la primera película devuelta como la película actual.
  //         const movie = response.data.results[0];
  //         if (movie) {
  //           setMovie(movie);
  //           // Obtener detalles adicionales de la película, específicamente el trailer.
  //           const detailsResponse = await axios.get(
  //             `${API_URL}/movie/${movie.id}`,
  //             {
  //               params: {
  //                 api_key: API_KEY,
  //                 append_to_response: "videos",
  //               },
  //             }
  //           );
  //           // Establecer el trailer oficial (si está disponible) como el trailer actual.
  //           const trailerData = detailsResponse.data.videos.results.find(
  //             (vid) => vid.name === vid.name
  //           );
  //           if (trailerData) {
  //             setTrailer(trailerData);
  //             setPlaying(true); // Establecer el video para que se reproduzca automáticamente.
  //           }
  //         }
  //       } catch (error) {
  //         console.error("Hubo un error:", error); // Manejo básico de errores.
  //       }
  //     };
  //     // Llamar a la función de búsqueda.
  //     fetchMovieByTitle();
  //   }, [title, API_KEY, API_URL]);
  //   const handleBack = () => {
  //     navigate("/peliculas");
  //   };
  //   return (
  //     <div className="container__movie">
  //       {movie && (
  //         <div>
  //           {playing && trailer ? (
  //             // Si se está reproduciendo, mostrar el reproductor de YouTube.
  //             <div className="container__movie-reproductor">
  //               <div className="movie__reproductor__btns">
  //                 <button
  //                   className="movie__reproductor-btn"
  //                   onClick={() => setPlaying(false)}
  //                 >
  //                   Mas informacion
  //                 </button>
  //                 <button className="movie__reproductor-btn" onClick={handleBack}>
  //                   Atras
  //                 </button>
  //               </div>
  //               <YouTube
  //                 videoId={trailer.key}
  //                 className="movie_reproductor"
  //                 opts={{
  //                   width: "100%",
  //                   height: "100%",
  //                   playerVars: {
  //                     autoplay: 1,
  //                     controls: 1,
  //                     cc_load_policy: 0,
  //                     fs: 0,
  //                     iv_load_policy: 1,
  //                     modestbranding: 0,
  //                     rel: 0,
  //                     showinfo: 0,
  //                   },
  //                 }}
  //               />
  //             </div>
  //           ) : (
  //             // Si no se está reproduciendo, mostrar detalles de la película y opción para reproducir.
  //             <div className="movie__Info">
  //               <div className="MI">
  //                 {trailer ? (
  //                   <button
  //                     className="movie__reproductor-btn"
  //                     onClick={() => setPlaying(true)}
  //                   >
  //                     Play Pelicula
  //                   </button>
  //                 ) : (
  //                   <p className="movie__no-disponible">
  //                     Pelicula no disponible{" "}
  //                   </p>
  //                 )}
  //                 <h1 className="movie__title">{movie.title}</h1>
  //                 <p className="text-white">{movie.overview}</p>
  //                   <button
  //                     className="movie__reproductor-btn"
  //                     onClick={handleBack}
  //                   >
  //                     Atras
  //                   </button>
  //               </div>
  //               <div
  //                 className="movie__bg--image"
  //                 style={{
  //                   backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
  //                 }}
  //               ></div>
  //             </div>
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };
  // export default Playmovies;
}

import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../style/trailersMovies.css";
import useFetch from "../hooks/useFecth";

const Playmovies = () => {
  const { title, id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  //Aqui se implementara la logica para opbtener informacion de las peliculas
  //con la condicion de que solo este disponible en la api que estamos consumiendo

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODA1NWViOTZlMzNmMjg3ZDk5MzlkMjNiYmUzMmRiOSIsInN1YiI6IjY1MzE4ZDg1NmQ5ZmU4MDBmZWE4ZmQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f6vy8C0Sn5yff7G0tPSixu3c5U-e8hWpUaxmyhoHfEQ",
    },
  };
  const [movieDetail, getMovieDetail] = useFetch(url, options);

  console.log(movieDetail);
  useEffect(() => {
    getMovieDetail();
    return getMovieDetail({});
  }, []);

  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const API_KEY = "AIzaSyATfhV3S-sXWzH-L4kPHnGSk6iqsTKv9c4"; // Reemplaza con tu propia clave de API de YouTube

    const fetchVideoBySearch = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: API_KEY,
              q: title + " official trailer",
              maxResults: 1,
              part: "id",
              type: "video",
            },
          }
        );

        if (response.data.items.length > 0) {
          const videoId = response.data.items[0].id.videoId;
          setVideoId(videoId);
        } else {
          console.log("No se encontraron videos para el título proporcionado.");
        }
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    fetchVideoBySearch();
  }, [title]);

  const handleBack = () => {
    navigate("/peliculas");
  };

  return (
    <div className="container__movie">
      {videoId ? (
        <div>
          <div className="container__movie-reproductor">
            <div className="movie__reproductor__btns">
              {/* <button
                className="movie__reproductor-btn"
                onClick={() => setVideoId(null)}
              >
                Mas información
              </button> */}
              <button className="movie__reproductor-btn" onClick={handleBack}>
                Atrás
              </button>
            </div>
            <YouTube
              videoId={videoId}
              className="movie_reproductor"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  cc_load_policy: 0,
                  fs: 0,
                  iv_load_policy: 1,
                  modestbranding: 0,
                  rel: 0,
                  showinfo: 0,
                },
              }}
            />
          </div>
        </div>
      ) : (
        <div className="movie__Info">
          <div className="MI">
            <h1 className="movie__title">{movieDetail?.original_title}</h1>
            <p className="text-white">{movieDetail?.overview}</p>
            <button className="movie__reproductor-btn" onClick={handleBack}>
              Atras
            </button>
          </div>
          <div
            className="movie__bg--image"
            style={{
              backgroundImage: `url("${baseURL}${movieDetail?.backdrop_path}")`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Playmovies;
