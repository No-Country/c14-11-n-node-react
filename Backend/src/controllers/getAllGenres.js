require('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getAllGenres = async () => {
  
  const { data } = await axios.get(
  `${API_URL}/3/genre/${tv?'tv':'movie'}/list?language=es&api_key=${API_KEY}`
  )

  const filmGenres = data.genres

  return filmGenres
}

module.exports = getAllGenres
