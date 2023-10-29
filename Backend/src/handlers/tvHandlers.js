const tvByGenres = require("../controllers/getTVByGenres")


//TRAER tv/series por genero
const getTvHandler = async (req, res) => {
    const { id } = req.params
    try {
      const films = await tvByGenres(id)
      return res.status(200).json(films)
    } catch (error) {
      return res.status(404).send(error)
    }
  }

  module.exports = {
    getTvHandler,

  }