import { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFecth";
import "../style/filters.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Atropos from "atropos/react";
import "atropos/css";
import { Store } from "../Store";
import NoMatches from "../components/NoMatches";

const Series = () => {
  //Se trae el estado global y su dispatch
  const {
    state: { allSeries, tvFilters },
    dispatch,
  } = useContext(Store);

  // Declaración de variables de estado y constantes
  const [genrefilter, setGenrefilter] = useState(false); // Almacena el filtro de género seleccionado

  const [noMore, setNoMore] = useState(false);
  //Estado para deshabilitar el boton de traer mas

  const url = "https://nocountry-00o9.onrender.com/filters/genres?tv=true"; // URL para obtener géneros
  const url1 = genrefilter
    ? `https://nocountry-00o9.onrender.com/tv/genres/${genrefilter}`
    : `https://nocountry-00o9.onrender.com/tv`; // URL para obtener películas por género

  const [inputText, setInputText] = useState(""); // Almacena el texto de búsqueda
  const urlSearch = `https://nocountry-00o9.onrender.com/tv/search?name=${inputText}`; // URL para buscar películas por nombre

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  //Función para realizar una búsqueda
  const handleSearch = async () => {
    setGenrefilter(false);
    setNoMore(false);
    const { data } = await axios.get(urlSearch);

    dispatch({ type: "GET_TV", payload: data });
  };

  // Utiliza un custom hook llamado useFetch para obtener la lista de géneros
  const [genres, setGenres] = useFetch(url);

  // Utiliza un custom hook llamado useFetch para obtener películas por género
  const [tvGenre, setTvGenre] = useFetch(url1);

  // Efecto para actualizar el filtro de género y cargar películas por género cuando cambia genrefilter
  useEffect(() => {
    setTvGenre();
    setGenres();
  }, []);

  //Trae los generos de peliculas en caso de que no esten cargados
  useEffect(() => {
    dispatch({ type: "GET_TV_FILTERS", payload: genres });
  }, [genres]);

  //Guarda la lista de peliculas en el estado global
  useEffect(() => {
    dispatch({ type: "GET_TV", payload: tvGenre });
  }, [tvGenre]);

  useEffect(() => {
    if (allSeries?.length < 20) {
      setNoMore(true);
    } else {
      console.log("La vida se trata de pequeños triunfos, que se convierten en una victoria");
    }
  }, [allSeries]);

  const navigate = useNavigate(); // Obtiene la función de navegación

  // Función para navegar a la página de detalles de una película
  const handleName = (title) => {
    navigate(`/playseries/${title}`);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    setInputText("");
    setNoMore(false);
    setTvGenre(`${url1}`);
  };

  //Paginado infinito
  const handleMore = async () => {
    //Se calcula la pagina actual segun la cantidad de peliculas que hay en el estado global
    const currentPage = allSeries.length / 20;

    //Se hace la peticion a la pagina que le sigue

    const moreShows = genrefilter
      ? await axios.get(
          `https://nocountry-00o9.onrender.com/tv/genres/${genrefilter}&page=${
            currentPage + 1
          }`
        )
      : inputText
      ? await axios.get(
          `https://nocountry-00o9.onrender.com/tv/search?name=${inputText}&page=${
            currentPage + 1
          }`
        )
      : await axios.get(
          `https://nocountry-00o9.onrender.com/tv?page=${currentPage + 1}`
        );

    if (moreShows.data.length === 0) {
      setNoMore(true);
      console.log("PRIMER IF");
      return;
    } else if (moreShows.data.length < 20) {
      console.log("SEGUNDO IF");
      setNoMore(true);
      dispatch({ type: "GET_MORE_SERIES", payload: moreShows.data });
      return;
    } else {
      //Se despacha y se guardan en el estado global
      dispatch({ type: "GET_MORE_SERIES", payload: moreShows.data });
    }
  };

  return (
    <section className="container__filter__cards">
      <div className="container__filters">
        <form>
          <select
            onChange={(e) => setGenrefilter(e.target.value)}
            value={genrefilter}
          >
            <option value="default" hidden>
              Género
            </option>
            {tvFilters?.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button onClick={handleFilter}>Buscar Genero</button>
        </form>

        <div className="filters__inputs">
          <input type="text" value={inputText} onChange={handleChange} />
          
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </div>

      <section className="filter__movies">
        {allSeries?.length === 0 ? (
          <NoMatches />
        ) : (
          allSeries?.map((show) => (
            <Atropos
              onClick={() => handleName(show.name)}
              className="movies__card"
              key={show.id}
            >
              {show.backdrop_path && show.name ? (
                <>
                  <img
                    className="movies__card-img"
                    data-atropos-offset="1"
                    src={show.image}
                    alt={show.name}
                  />
                  <h1 className="movies__card-title" data-atropos-offset="5">
                    {show.name}
                  </h1>
                </>
              ) : (
                <div className="movies__card-skeleton">
                  <div data-atropos-offset="1" className="skeleton-image"></div>
                  <div data-atropos-offset="5" className="skeleton-title"></div>
                </div>
              )}
            </Atropos>
          ))
        )}
      </section>
      <button
        hidden={noMore}
        className="more__movies-and-series-btn"
        onClick={handleMore}
      >
        TRAER MAS
      </button>
    </section>
  );
};

export default Series;
