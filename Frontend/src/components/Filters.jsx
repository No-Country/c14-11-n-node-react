import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFecth'
import { useForm } from 'react-hook-form'
import '../style/filters.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Filters = () => {
  // Declaración de variables de estado y constantes
  const [genrefilter, setGenrefilter] = useState() // Almacena el filtro de género seleccionado
  const [searched, setSearched] = useState(false) // Almacena los resultados de búsqueda

  const baseURL = 'https://image.tmdb.org/t/p/w500' // URL base para las imágenes
  const url = 'http://localhost:4000/filters/genres' // URL para obtener géneros
  const url1 = `http://localhost:4000/filters/genre/${genrefilter}` // URL para obtener películas por género

  const [inputText, setInputText] = useState('') // Almacena el texto de búsqueda
  const urlSearch = `http://localhost:4000/search?name=${inputText}` // URL para buscar películas por nombre

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  // Función para realizar una búsqueda
  const handleSearch = async () => {
    const { data } = await axios.get(urlSearch)
    setSearched(data)
  }

  // Utiliza un custom hook llamado useFetch para obtener la lista de géneros
  const [genres, setGenres] = useFetch(url)

  // Utiliza un custom hook llamado useFetch para obtener películas por género
  const [moviegenre, setMoviegenre] = useFetch(url1)

  // Efecto para actualizar el filtro de género y cargar películas por género cuando cambia genrefilter
  useEffect(() => {
    setGenres()
    setMoviegenre()
    setGenrefilter(moviegenre)
  }, [genrefilter])

  // Configuración para el formulario y sus datos
  const { register, handleSubmit, reset } = useForm()

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = (data) => {
    setGenrefilter(data.genre)
    setSearched(null)
    reset()
  }

  const navigate = useNavigate() // Obtiene la función de navegación

  // Función para navegar a la página de detalles de una película
  const handleName = (title) => {
    navigate(`/playmovies/${title}`)
  }

  return (
    <section className="container__filter__cards">
      <div>
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('genre')}>
          <option value="">Género</option>
          {genres?.map((genre) => (
            <option value={genre.id} key={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
        <button type="submit">Buscar Genero</button>
      </form>
      <section className="filter__movies">
        {(searched ? searched : moviegenre)?.map((movie) => (
          <div
            onClick={() => handleName(movie.title)}
            className="movies__card"
            key={movie.id}
          >
            <img src={baseURL + movie.backdrop_path} alt="" />
            <h1>{movie.title}</h1>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Filters
