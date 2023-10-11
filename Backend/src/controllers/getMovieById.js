require('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getMovieById = async (filmId) => {
  const { data } = await axios.get(
    `${API_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  )

  return data
}

module.exports = getMovieById
