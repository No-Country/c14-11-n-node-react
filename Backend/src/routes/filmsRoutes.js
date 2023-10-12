const {
  getAllMoviesHandler,
  getMovieByIdHandler,
} = require('../handlers/filmsHandlers')

const { Router } = require('express')

const filmRouter = Router()

//GET ALL MOVIES FROM API
filmRouter.get(`/`, getAllMoviesHandler)

//GET MOVIE BY ID
filmRouter.get('/:filmId', getMovieByIdHandler)

//GET MOVIE BY NAME
filmRouter.get('/search')

//TRAER PELICULAS POPULARES

module.exports = filmRouter
