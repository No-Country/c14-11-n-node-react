import { useEffect } from "react"

import "../style/playMovie.css"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFecth"

const PlayMovie = () => {

    const url = `http://localhost:4000/getmovies`
    const [movies, setMovies] = useFetch(url)

  
    useEffect(() => {
      setMovies([])
    }, [])

    const baseURL = "https://image.tmdb.org/t/p/w500";
    const { playMovie } = useParams()
    console.log(playMovie);
    const movie = movies?.find(movie => movie.title === playMovie);
    console.log(movie);
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