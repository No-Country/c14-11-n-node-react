const getAllGenres = require('../controllers/getAllGenres')
const getByGenre = require('../controllers/getMoviesByGenre')

const getGenresHandler = async (req, res) => {
  try {
    const genres = await getAllGenres()

    return res.status(200).json(genres)
  } catch (error) {
    return res.status(404).send(error)
  }
}

const getByGenreHandler = async (req, res) => {
  const { idGenre } = req.params
  try {
    const moviesFiltered = await getByGenre(idGenre)

    return res.status(200).json(moviesFiltered)
  } catch (error) {
    return res.status(404).send(error)
  }
}

module.exports = {
  getGenresHandler,
  getByGenreHandler,
}
