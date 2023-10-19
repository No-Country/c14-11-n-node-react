import data from "../../data.json"
import "../style/playMovie.css"

import { useParams } from "react-router-dom"

const PlayMovie = () => {

    const baseURL = "https://image.tmdb.org/t/p/w500";
    const { playMovie } = useParams()
    const decodedMovieName = decodeURIComponent(playMovie);
    const movie = data.find(movie => movie.title === decodedMovieName);
    if (!movie) {
        return <div>Película no encontrada</div>;
    }
    return (
        <div className="playMovie">
            <h1>{movie.title}</h1>
            <img src={baseURL + movie.backdrop_path} alt="" />
            <p>{movie.overview}</p>
            <p>Popularidad : {movie.popularity}</p>
            <p>Año de lanzxamiento: {movie.popularity}</p>

        </div>
    )
}

export default PlayMovie