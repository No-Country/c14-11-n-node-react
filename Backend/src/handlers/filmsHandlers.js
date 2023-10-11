const { getAllMovies } = require('../controllers/getAllMovies')
const getMovieById = require('../controllers/getMovieById')

const getAllMoviesHandler = async (req, res) => {
  try {
    const result = await getAllMovies()

    return res.status(200).json(result)
  } catch (error) {
    return res.status(404).send(error)
  }
}

const getMovieByIdHandler = async (req, res) => {
  const { filmId } = req.params

  try {
    const film = await getMovieById(filmId)

    return res.status(200).json(film)
  } catch (error) {
    return res.status(404).send(error)
  }
}

module.exports = {
  getAllMoviesHandler,
  getMovieByIdHandler,
}
