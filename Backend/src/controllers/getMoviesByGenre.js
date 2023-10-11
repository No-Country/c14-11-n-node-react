require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getByGenre = async (idGenre) => {
  const { data } = await axios.get(
    `${API_URL}/3/discover/movie?language=es-ES&with_genre=${idGenre}&api_key=${API_KEY}`
  )

  const listOfMovies = mapLinksOnArray(data.results)

  return listOfMovies
}

module.exports = getByGenre
