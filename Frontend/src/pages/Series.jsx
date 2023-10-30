import { useEffect, useState } from "react";
import useFetch from "../hooks/useFecth";
import { useForm } from "react-hook-form";
import "../style/filters.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Atropos from "atropos/react";
import "atropos/css";

const Series = () => {
  const onSubmit = (data) => {
    setGenrefilter(data.genre);
    setSearched(null);
    reset();
  };
  // Declaración de variables de estado y constantes
  const [genrefilter, setGenrefilter] = useState(); // Almacena el filtro de género seleccionado
  const [searched, setSearched] = useState(false); // Almacena los resultados de búsqueda

  const baseURL = "https://image.tmdb.org/t/p/w500"; // URL base para las imágenes
  const url = "http://localhost:4000/filters/genres"; // URL para obtener géneros
  const url1 = `http://localhost:4000/filters/genre/${genrefilter}`; // URL para obtener películas por género

  const [inputText, setInputText] = useState(""); // Almacena el texto de búsqueda
  const urlSearch = `http://localhost:4000/search?name=${inputText}`; // URL para buscar películas por nombre

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  // Función para realizar una búsqueda
  const handleSearch = async () => {
    const { data } = await axios.get(urlSearch);
    setSearched(data);
  };

  // Utiliza un custom hook llamado useFetch para obtener la lista de géneros
  const [genres, setGenres] = useFetch(url);

  // Utiliza un custom hook llamado useFetch para obtener películas por género
  const [moviegenre, setMoviegenre] = useFetch(url1);

  // Efecto para actualizar el filtro de género y cargar películas por género cuando cambia genrefilter
  useEffect(() => {
    setGenres();
    setGenrefilter(moviegenre);
    setMoviegenre();
  }, [genrefilter]);

  // Configuración para el formulario y sus datos
  const { register, handleSubmit, reset } = useForm();

  // Función que se ejecuta cuando se envía el formulario

  const navigate = useNavigate(); // Obtiene la función de navegación

  // Función para navegar a la página de detalles de una película
  const handleName = (title) => {
    navigate(`/playmovies/${title}`);
  };

  return (
    <section className="container__filter__cards">
      <div className="container__filters">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select {...register("genre")}>
            <option value="">Género</option>
            {genres?.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button type="submit">Buscar Genero</button>
        </form>

        <div>
          <input type="text" value={inputText} onChange={handleChange} />
          <div className="highlight"></div>
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>
      <section className="filter__movies">
        {(searched ? searched : moviegenre)?.map((movie) => (
          <Atropos
            shadow={true}
            highlight={true}
            onClick={() => handleName(movie.title)}
            className="movies__card"
            key={movie.id}
          >
            {movie.backdrop_path && movie.title ? (
              <>
                <img
                  className="movies__card-img"
                  data-atropos-offset="1"
                  src={baseURL + movie.backdrop_path}
                  alt={movie.title}
                />
                <h1 className="movies__card-title" data-atropos-offset="5">
                  {movie.title}
                </h1>
              </>
            ) : (
              <>
                <div data-atropos-offset="1" className="skeleton-image"></div>
                <div data-atropos-offset="5" className="skeleton-title"></div>
              </>
            )}
          </Atropos>
        ))}
      </section>
    </section>
  );
};

export default Series;
