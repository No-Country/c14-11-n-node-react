
import "../../style/card.css"
import datos from '../../../data.json'
import { useNavigate } from 'react-router-dom';



//Se cambio la funcion y la forma de exportar la funcion Card
const Card = () => {
  const baseURL = "https://image.tmdb.org/t/p/w500";

 



//se estaba utilizande fecth para obtener datos de un json
//lo cual estaba provocando un eror 
//se utiliza para realizar solicitudes HTTP a una UR
//como el archivo es local obtenemos lo datos directamente 

const navigate = useNavigate()



  const handleClick = (playMovie) => {
  navigate(`/playMovie/${playMovie}`);
  };



  return (
    <div className='container__cards' >
          {datos?.map(item => (
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








