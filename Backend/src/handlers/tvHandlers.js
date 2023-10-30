const getAllSeries = require('../controllers/getAllSeries')
const getSeriesByGenres = require('../controllers/getTVByGenres')

//TRAER PELICULAS DE LA API
const getAllSeriesHandler = async (req, res) => {
  const { page } = req.query

  try {
    if (page == '0') throw new Error('Page not valid')
    const result = await getAllSeries(page)

    return res.status(200).json(result)
  } catch (error) {
    return res.status(404).send(error.message ?? error)
  }
}
//TRAER tv/series por genero
const getTvByGenresHandler = async (req, res) => {
  const { id } = req.params
  const { page } = req.query

  try {
    const series = await getSeriesByGenres(id, page)

    return res.status(200).send(series)
  } catch (error) {
    return res.status(404).send(error)
  }
}

module.exports = {
  getAllSeriesHandler,
  getTvByGenresHandler,
}
