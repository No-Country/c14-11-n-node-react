const { getAllMoviesHandler } = require('../handlers/filmsHandlers')

const { Router } = require('express')

const filmRouter = Router()

//GET ALL MOVIES FROM API
filmRouter.get(`/`, getAllMoviesHandler)

//GET MOVIE BY ID

//GET MOVIE BY NAME

module.exports = filmRouter
