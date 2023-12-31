import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFecth";
import "../style/slides.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SlidePop = () => {
  // const [swiperRef, setSwiperRef] = useState(null);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const urlPop = "https://nocountry-00o9.onrender.com/list/popmovies";

  const [topRated, setTopRated] = useFetch(urlPop);

  useEffect(() => {
    if (setTopRated()) return 
  }, []);


  return (
    <>
      <h1 className="slides__title">Peliculas más vistas</h1>
      <div className="slides">
        <Swiper
          className="slides__box"
          modules={[Virtual, Navigation, Pagination]}
          // onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={10}
          navigation={true}
        >
          {topRated?.map((show) => (
            <SwiperSlide className="slides__carta" key={show.original_title}>
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

export default SlidePop;
