const {
  getAllMoviesHandler,
  getMovieByIdHandler,
  getMovieByNameHandler,
  getMovieByGenresHandler,
} = require('../handlers/filmsHandlers')

const { Router } = require('express')

const filmRouter = Router()

//PREV = http://localhost:4000/getmovies

//TRAER PELICULAS DE LA API
filmRouter.get(`/`, getAllMoviesHandler)
//TRAER PELICULAS POR GENERO ID
filmRouter.get('/genres/:id', getMovieByGenresHandler)

//TRAER DETAIL DE LA PELICULA (PETICION POR ID)
filmRouter.get('/:filmId', getMovieByIdHandler)

//TRAER PELICULAS POR NOMBRES (QUERY)
filmRouter.get('/search', getMovieByNameHandler)

module.exports = filmRouter
