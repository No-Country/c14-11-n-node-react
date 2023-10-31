const {
  getAllSeriesHandler,
  getTvByGenresHandler,
} = require('../handlers/tvHandlers')

const { Router } = require('express')
const tvRouter = Router()

//PREV = http://localhost:4000/tv

//TRAER SERIES DE LA API
tvRouter.get(`/`, getAllSeriesHandler)

//TRAER TV/SERIES POR GENERO ID
tvRouter.get('/genres/:id', getTvByGenresHandler)

module.exports = tvRouter
