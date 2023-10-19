const { getPopMovies } = require('../controllers/getPopularMovies')
const { getTopRated } = require('../controllers/getTopRated')
const { getUpcomings } = require('../controllers/getUpcomings')

//TRAER PELICULAS POPULARES
const getPopularMoviesHandler = async (req, res) => {
  try {
    const popFilms = await getPopMovies()

    return res.status(200).json(popFilms)
  } catch (error) {
    return res.status(404).send(error)
  }
}

//TRAER TOP RATED MOVIES
const getTopRatedHandler = async (req, res) => {
  try {
    const topMovies = await getTopRated()

    return res.status(200).json(topMovies)
  } catch (error) {
    return res.status(404).send(error)
  }
}

//TRAER PROXIMOS ESTRENOS
const getUpcomingHandler = async (req, res) => {
  try {
    const upcomings = await getUpcomings()

    return res.status(200).json(upcomings)
  } catch (error) {
    return res.status(404).send(error)
  }
}

module.exports = {
  getPopularMoviesHandler,
  getTopRatedHandler,
  getUpcomingHandler,
}
