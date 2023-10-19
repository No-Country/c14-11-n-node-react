
import "../../style/card.css"
import datos from '../../../data.json'
import axios from "axios"
import { useState } from "react";


//Se cambio la funcion y la forma de exportar la funcion Card
const Card = () => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const [movies, setmovies] = useState()

  //se estaba utilizande fecth para obtener datos de un json
  //lo cual estaba provocando un error 
  //fecht se utiliza para realizar solicitudes HTTP a una UR
  //como el archivo es local obtenemos lo datos directamente 
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/authentication',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODA1NWViOTZlMzNmMjg3ZDk5MzlkMjNiYmUzMmRiOSIsInN1YiI6IjY1MzE4ZDg1NmQ5ZmU4MDBmZWE4ZmQwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f6vy8C0Sn5yff7G0tPSixu3c5U-e8hWpUaxmyhoHfEQ'
    }
  };

  axios
    .request(options)
    .then(function (response) {
      setmovies(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const handleClick = (countryName) => {
    console.log(countryName);
  };



  return (
    <div className='container__cards' >
      {datos.map(item => (
        <article
          onClick={() => handleClick(item.title)}
          key={item.title} className='container__card'>
          <h1>{item.title}</h1>
          <img src={baseURL + item.backdrop_path} alt="" />
          <h5>{item.overview}</h5>
          <h5>{item.release_date}</h5>
        </article>

      ))}
    </div>
  )
}


export default Card








