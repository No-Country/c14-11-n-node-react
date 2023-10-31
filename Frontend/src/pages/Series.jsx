import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/useFecth'
import '../style/filters.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Atropos from 'atropos/react'
import 'atropos/css'
import { Store } from '../Store'

const Series = () => {
  //Se trae el estado global y su dispatch
  const {
    state: { allSeries, tvFilters },
    dispatch,
  } = useContext(Store)

  // Declaración de variables de estado y constantes
  const [genrefilter, setGenrefilter] = useState(false) // Almacena el filtro de género seleccionado
  // const [searched, setSearched] = useState(false) // Almacena los resultados de búsqueda

  const url = 'http://localhost:4000/filters/genres?tv=true' // URL para obtener géneros
  const url1 = genrefilter
    ? `http://localhost:4000/tv/genres/${genrefilter}`
    : `http://localhost:4000/tv` // URL para obtener películas por género

  const [inputText, setInputText] = useState('') // Almacena el texto de búsqueda
  const urlSearch = `http://localhost:4000/search?name=${inputText}` // URL para buscar películas por nombre

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  // Función para realizar una búsqueda
  // const handleSearch = async () => {
  //   setGenrefilter(false)
  //   const { data } = await axios.get(urlSearch)
  //   setSearched(data)
  // }

  // Utiliza un custom hook llamado useFetch para obtener la lista de géneros
  const [genres, setGenres] = useFetch(url)

  // Utiliza un custom hook llamado useFetch para obtener películas por género
  const [tvGenre, setTvGenre] = useFetch(url1)

  // Efecto para actualizar el filtro de género y cargar películas por género cuando cambia genrefilter
  useEffect(() => {
    if (allSeries.length === 0) {
      setTvGenre()
    }
    setGenres()
  }, [])

  //Trae los generos de peliculas en caso de que no esten cargados
  useEffect(() => {
    dispatch({ type: 'GET_TV_FILTERS', payload: genres })
  }, [genres])

  //Guarda la lista de peliculas en el estado global
  useEffect(() => {
    dispatch({ type: 'GET_TV', payload: tvGenre })

    console.log(tvGenre)
  }, [tvGenre])

  const navigate = useNavigate() // Obtiene la función de navegación

  // Función para navegar a la página de detalles de una película
  const handleName = (title) => {
    navigate(`/playmovies/${title}`)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    setInputText('')
    setTvGenre(`${url1}`)
  }

  //Paginado infinito
  const handleMore = async () => {
    //Se calcula la pagina actual segun la cantidad de peliculas que hay en el estado global
    const currentPage = allSeries.length / 20

    //Se hace la peticion a la pagina que le sigue

    const moreMovies = genrefilter
      ? await axios.get(
          `http://localhost:4000/filters/genre/${genrefilter}&page=${
            currentPage + 1
          }`
        )
      : inputText
      ? await axios.get(
          `http://localhost:4000/search?name=${inputText}&page=${
            currentPage + 1
          }`
        )
      : await axios.get(`http://localhost:4000/tv?page=${currentPage + 1}`)

    //Se despacha y se guardan en el estado global
    dispatch({ type: 'GET_MORE_SERIES', payload: moreMovies.data })
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
            {tvFilters?.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
          <button onClick={handleFilter}>Buscar Genero</button>
        </form>

        <div>
          <input type="text" placeholder="Busca tu Serie Favorita" value={inputText} onChange={handleChange} />
          <div className="highlight"></div>
          <button
          //  onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
      </div>
      <section className="filter__movies">
        {tvGenre?.map((show) => (
          <Atropos
            onClick={() => handleName(show.title)}
            className="movies__card"
            key={show.id}
          >
            {show.backdrop_path && show.title ? (
              <>
                <img
                  className="movies__card-img"
                  data-atropos-offset="1"
                  src={show.image}
                  alt={show.title}
                />
                <h1 className="movies__card-title" data-atropos-offset="5">
                  {show.title}
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
      <button onClick={handleMore}>TRAER MAS</button>
    </section>
  )
}

export default Series
