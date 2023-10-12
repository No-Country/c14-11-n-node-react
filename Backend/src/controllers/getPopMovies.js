require('dotenv').config()
const axios = require ('axios')
 const { mapLinks } = require ('../utils/cleanFilms')
 const { API_KEY } = process.env
 const API_URL = 'https://api.themoviedb.org'

 module.exports=async()=>{
    try {
        const request=await axios.get(`${API_URL}/3/movie/popular?api_key=${API_KEY}`);
        const filter= mapLinks(request.data);

        return filter

    } catch (error) {
        console.log(error);
    }
}