import { useEffect, useState } from "react";
import useFetch from "../hooks/useFecth";
import { useForm } from "react-hook-form";
import "../style/filters.css"
import { useNavigate } from "react-router-dom";


const Filters = () => {

  const [genrefilter, setGenrefilter] = useState();
  // const [movieFilter, setMovieFilter] = useState()

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url = "http://localhost:4000/filters/genres";
  const url1 = `http://localhost:4000/filters/genre/${genrefilter}`

  const [genres, setGenres] = useFetch(url);
  const [moviegenre, setMoviegenre] = useFetch(url1)


console.log(genrefilter);
  useEffect(() => {
    setGenres();
    setMoviegenre()
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setGenrefilter(data.genre);
    reset();
  };

 const navigate = useNavigate()

 
 const hanldeName = (title) => {
  navigate(`/playmovies/${title}`)
 }

  return (
    <section className="container__filter__cards">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("genre")}>
        <option value="">Género</option> 
          {genres?.map((genre) => (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>

      </form>
      <section className="filter__movies">
          {
            moviegenre?.map((movie) => (
              <div onClick={()=>hanldeName(movie.title)}  className="movies__card" key={movie.id}>
                <img src={baseURL+movie.backdrop_path} alt=""/>
                <h1>{movie.title}</h1>
              </div>
            ))
          }
      </section>
    </section>
  );
};

export default Filters;
