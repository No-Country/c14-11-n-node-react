require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getAllMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/discover/movie?language=es-ES&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
  )

  const infoApi = mapLinksOnArray(data.results)

  return infoApi
}
module.exports = {
  getAllMovies,
}
