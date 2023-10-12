import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import axios from 'axios';
import { Carousel } from "react-responsive-carousel";
import MyCarousel from "../carousel/Carousel";
export default function LandingPage(){
    // useEffect(() => {
        
    //     axios.get('URL_DEL_BACKEND/ENDPOINT')
    //       .then(response => {
    //          console.log(response.data);
    //       })
    //       .catch(error => {
    //         console.error('Error:', error);
    //       });
    //   }, []);
    return(
        <div>
<MyCarousel/>
<Link to="/login">
       <button >Iniciar sesión</button>
</Link>
        </div>
    )
}

