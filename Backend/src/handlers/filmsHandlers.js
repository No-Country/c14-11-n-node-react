const { getAllMovies } = require('../controllers/getAllMovies')

const getAllMoviesHandler = async (req, res) => {
  try {
    const result = await getAllMovies()

    return res.status(200).json(result)
  } catch (error) {
    return res.status(404).send(error)
  }
}

module.exports = {
  getAllMoviesHandler,
}
