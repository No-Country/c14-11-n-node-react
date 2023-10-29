const { getAllMovies } = require('../controllers/getAllMovies')
const getMovieById = require('../controllers/getMovieById')
const getMovieByName = require('../controllers/getMovieByName')
const { getPopMovies } = require('../controllers/getPopularMovies')
const getByGenre = require('../controllers/getMoviesByGenre')
const getPopularByGenres = require('../controllers/getPopularByGenres')

//TRAER PELICULAS DE LA API
const getAllMoviesHandler = async (req, res) => {
  try {
    const result = await getAllMovies()

    return res.status(200).json(result)
  } catch (error) {
    return res.status(404).send(error)
  }
}

//TRAER DETAIL DE 1 PELICULA
const getMovieByIdHandler = async (req, res) => {
  const { filmId } = req.params

  try {
    const film = await getMovieById(filmId)

    return res.status(200).json(film)
  } catch (error) {
    return res.status(404).send(error)
  }
}

//TRAER PELICULA POR NOMBRE
const getMovieByNameHandler = async (req, res) => {
  const { name } = req.query

  try {
    const films = await getMovieByName(name)

    return res.status(200).send(films)
  } catch (error) {
    return res.status(404).send(error)
  }
}

//TRAER PELICULA POR GENERO ID
const getMovieByGenresHandler = async (req, res) => {
  const { id } = req.params
  try {
    const films = await getByGenre(id)
    return res.status(200).json(films)
  } catch (error) {
    return res.status(404).send(error)
  }
}

///Traer populares por genero
const getPopulateByGenresHandler = async (req, res) => {
  const { id } = req.params
  try {
    const films = await getPopularByGenres(id)
    return res.status(200).json(films)
  } catch (error) {
    return res.status(404).send(error)
  }
}


module.exports = {
  getAllMoviesHandler,
  getMovieByIdHandler,
  getMovieByNameHandler,
  getMovieByGenresHandler,
  getPopulateByGenresHandler,
}
