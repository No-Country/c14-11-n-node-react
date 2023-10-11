import React, { useState, useEffect } from 'react';

export default function Card() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('../../data.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map(item => (
        
        <div>
          <h1>{item.title}</h1>
          <img src={item.backdrop_path} alt="" />
          <h5>{item.overview}</h5>
          <h5>{item.release_date}</h5>
       </div>
        
      ))}
    </div>
  );
}

