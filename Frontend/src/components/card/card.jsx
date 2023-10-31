import { useState, useEffect } from 'react';
import "../../style/card.css"
import datos from '../../../data.json'



//Se cambio la funcion y la forma de exportar la funcion Card
const Card = () => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
  console.log(data);


//se estaba utilizande fecth para obtener datos de un json
//lo cual estaba provocando un eror 
//se utiliza para realizar solicitudes HTTP a una UR
//como el archivo es local obtenemos lo datos directamente 

  useEffect(() => {
    
        setData(datos);
        setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }


  //como se quito fecht entonces error no esta definido 
  //y genera problemas se deja comentado para que no genere conflictos 

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }


  return (
    <div className='container__cards' >
          {data?.map(item => (
            <article key={item.title} className='container__card'>
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








