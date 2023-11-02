import "../style/slides.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFecth";

import { Virtual, Navigation, Pagination } from "swiper/modules";

const SlideTopRated = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const urlTR = "https://nocountry-00o9.onrender.com/list/top";

  const [topRated, setTopRated] = useFetch(urlTR);

  useEffect(() => {
    setTopRated([]);
  }, []);

  return (
    <>
      <h1 className="slides__title">Series más vistas</h1>
      <div className="slides">
        <Swiper
          className="slides__box"
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
      
          navigation={true}
     
        >
          {topRated?.map((show) => (
            <SwiperSlide className="slides__carta" key={show.id}>
              <h1>{show.original_title}</h1>
              <img
                src={`${baseUrl}${
                  show.poster_path ? show.poster_path : show.image
                }`}
                alt="Imagenes "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SlideTopRated;
