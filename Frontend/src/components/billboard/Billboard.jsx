import { useEffect, useState } from "react"
import axios from 'axios'
import '../../style/card.css'

export const Billboard = () => {
    
  const API_KEY = '4f5f43495afcc67e9553f6c684a82f84'
  const API_URL = 'https://api.themoviedb.org/3'
 
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  //variable de estado
  const [movies, setMovies] = useState([]);
  
 

  const fetchMovies = async () => {
    const type = 'discover'
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
     },
    });
    setMovies(results) 
    

  }

useEffect(() => {
 fetchMovies()
}, []);


  return (
 
    <div >
      <h1 className="billboard__title">Movies In Theaters</h1>
        <div className='container__cards'>
          {movies.map((movie)=> (
            <div key={movie.id} className='container__card' >
              <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} />
              <h2>{ movie.title }</h2>
            </div>
          ))}
        </div>
      </div>
  
  )
}
