import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFecth'
import '../style/filters.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Atropos from 'atropos/react'
import 'atropos/css'
import { Store } from '../Store'
import NoMatches from '../components/NoMatches'

const Peliculas = () => {
  //Se trae el estado global y su dispatch
  const {
    state: { allMovies, movieFilters },
    dispatch,
  } = useContext(Store)

  // Declaración de variables de estado y constantes
  const [genrefilter, setGenrefilter] = useState(false) // Almacena el filtro de género seleccionado

  const [noMore, setNoMore] = useState(false)

  const url = 'https://nocountry-00o9.onrender.com/filters/genres' // URL para obtener géneros
  const url1 = `https://nocountry-00o9.onrender.com/filters/genre/${genrefilter}` // URL para obtener películas por género

  const [inputText, setInputText] = useState('') // Almacena el texto de búsqueda
  const urlSearch = `https://nocountry-00o9.onrender.com/search?name=${inputText}` // URL para buscar películas por nombre

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  // Función para realizar una búsqueda
  const handleSearch = async () => {
    setGenrefilter(false)
    setNoMore(false)

    const { data } = await axios.get(urlSearch)
    dispatch({ type: 'GET_MOVIES', payload: data })
  }

  // Utiliza un custom hook llamado useFetch para obtener la lista de géneros
  const [genres, setGenres] = useFetch(url)

  // Utiliza un custom hook llamado useFetch para obtener películas por género
  const [moviegenre, setMoviegenre] = useFetch(url1)

  // Efecto para actualizar el filtro de género y cargar películas por género cuando cambia genrefilter
  useEffect(() => {
    setGenres()
    setMoviegenre()
  }, [])

  //Trae los generos de peliculas en caso de que no esten cargados
  useEffect(() => {
    dispatch({ type: 'GET_MOVIE_FILTERS', payload: genres })
  }, [genres])

  //Guarda la lista de peliculas en el estado global
  useEffect(() => {
    dispatch({ type: 'GET_MOVIES', payload: moviegenre })
  }, [moviegenre])

  useEffect(() => {
    if (allMovies?.length < 20) {
      setNoMore(true)
    } else {
      console.log('por alguna razon hay que poner esto aca')
    }
  }, [allMovies])

  const navigate = useNavigate() // Obtiene la función de navegación

  // Función para navegar a la página de detalles de una película
  const handleName = (title) => {
    navigate(`/playmovies/${title}`)
  }

  // Trae peliculas del genero solicitado
  const handleFilter = (event) => {
    event.preventDefault()
    setInputText('')
    setNoMore(false)
    setMoviegenre(`${url1}`)
  }

  //Paginado infinito
  const handleMore = async () => {
    //Se calcula la pagina actual segun la cantidad de peliculas que hay en el estado global
    const currentPage = allMovies.length / 20

    //Se hace la peticion a la pagina que le sigue

    const moreMovies = genrefilter
      ? await axios.get(
          `https://nocountry-00o9.onrender.com/filters/genre/${genrefilter}&page=${
            currentPage + 1
          }`
        )
      : inputText
      ? await axios.get(
          `https://nocountry-00o9.onrender.com/search?name=${inputText}&page=${
            currentPage + 1
          }`
        )
      : await axios.get(
          `https://nocountry-00o9.onrender.com/getmovies?page=${
            currentPage + 1
          }`
        )

    if (moreMovies.data.length === 0) {
      setNoMore(true)
      console.log('PRIMER IF')
      return
    } else if (moreMovies.data.length < 20) {
      console.log('SEGUNDO IF')
      setNoMore(true)
      dispatch({ type: 'GET_MORE_MOVIES', payload: moreMovies.data })
      return
    } else {
      //Se despacha y se guardan en el estado global
      dispatch({ type: 'GET_MORE_MOVIES', payload: moreMovies.data })
    }
  }

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
            {movieFilters?.map((genre) => (
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
        {allMovies?.length === 0 ? (
          <NoMatches />
        ) : (
          allMovies?.map((movie) => (
            <Atropos
              onClick={() => handleName(movie.title)}
              className="movies__card"
              key={movie.id}
            >
              {movie.backdrop_path && movie.title ? (
                <>
                  <img
                    className="movies__card-img"
                    data-atropos-offset="1"
                    src={movie.image}
                    alt={movie.title}
                  />
                  <h1 className="movies__card-title" data-atropos-offset="5">
                    {movie.title}
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
  )
}

export default Peliculas
