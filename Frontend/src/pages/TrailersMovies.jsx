// Importando las bibliotecas necesarias.
import axios from 'axios';  // Para realizar peticiones HTTP.
import YouTube from 'react-youtube';  // Componente para embeber videos de YouTube.
import '../style/trailersMovies.css';  // Estilos específicos para este componente.
import { useState, useEffect } from 'react';  // Ganchos de estado y efectos de React.
import { useNavigate, useParams } from 'react-router-dom';  // Gancho para acceder a parámetros de ruta.

const TrailersMovies = () => {
  // Utilizando el gancho useParams para obtener el título desde la URL.
  const { title } = useParams();

  // Constantes de configuración de la API.
  const API_KEY = '4f5f43495afcc67e9553f6c684a82f84';
  const API_URL = 'https://api.themoviedb.org/3';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';

  // Estado para almacenar datos del trailer, película y si el video está reproduciéndose.
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState(null);
  const [playing, setPlaying] = useState(true);
  const navigate = useNavigate()



  // Gancho useEffect que se ejecuta cuando el componente se monta.
  useEffect(() => {
    // Función para buscar una película por el título proporcionado en la URL.
    const fetchMovieByTitle = async () => {
      try {
        // Realizar petición a la API para buscar la película por título.
        const response = await axios.get(`${API_URL}/search/movie`, {
          params: {
            api_key: API_KEY,
            query: title
          }
        });

        // Establecer la primera película devuelta como la película actual.
        const movie = response.data.results[0];
        if (movie) {
          setMovie(movie);

          // Obtener detalles adicionales de la película, específicamente el trailer.
          const detailsResponse = await axios.get(`${API_URL}/movie/${movie.id}`, {
            params: {
              api_key: API_KEY,
              append_to_response: 'videos'
            }
          });

          // Establecer el trailer oficial (si está disponible) como el trailer actual.
          const trailerData = detailsResponse.data.videos.results.find(
            (vid) => vid.name === 'Official Trailer'
          );
          if (trailerData) {
            setTrailer(trailerData);
            setPlaying(true);  // Establecer el video para que se reproduzca automáticamente.
          }
        }
      } catch (error) {
        console.error("Hubo un error:", error);  // Manejo básico de errores.
      }
    };

    // Llamar a la función de búsqueda.
    fetchMovieByTitle();
  }, [title, API_KEY, API_URL]);
  const handleBack =() =>{
    navigate("/")
  }
  return (
    <div className='container__movie'>
     
      {movie && (
        <div>
          {playing && trailer ? (
            // Si se está reproduciendo, mostrar el reproductor de YouTube.
            <div className='container__movie-reproductor'>
           <div className='movie__reproductor__btns'>
           <button className='movie__reproductor-btn' onClick={() => setPlaying(false)}>
                Close
              </button>
              <button className='movie__reproductor-btn' onClick={handleBack}>
                Atras
              </button>
           </div>
              <YouTube
                videoId={trailer.key}
                className='movie_reproductor'
                
                opts={{
                  width: '100%',
                  height: '100%',
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
          ) : (
            // Si no se está reproduciendo, mostrar detalles de la película y opción para reproducir.
            <div className='movie__Info'>
           <div className='MI'>
           {trailer ? (
                <button className='movie__reproductor-btn' onClick={() => setPlaying(true)}>Play Trailer</button>
              ) : <p className='movie__no-disponible'>Pelicula no disponible </p> }
              <h1 className='movie__title'>{movie.title}</h1>
              <p className='text-white'>{movie.overview}</p>
           {trailer ? '' : <button className='movie__reproductor-btn' onClick={handleBack}>
                Atras
              </button>}
           </div>
           
             <div className='movie__bg--image' style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}>          
             </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default TrailersMovies;
