const { Router } = require('express')
const {
  getGenresHandler,
  getByGenreHandler,
} = require('../handlers/filterHandlers')

const filterRouter = Router()

//GET ALL GENRES FROM API
filterRouter.get('/genres', getGenresHandler)

filterRouter.get('/genre/:idGenre', getByGenreHandler)

module.exports = filterRouter
