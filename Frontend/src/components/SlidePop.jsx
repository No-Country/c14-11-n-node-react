import { useEffect, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFecth";
import "../style/slides.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SlideTopRated() {
  const [swiperRef, setSwiperRef] = useState(null);

  const baseUrl = "https://image.tmdb.org/t/p/w500";

  const urlPop = "http://localhost:4000/list/popmovies";

  const [topRated, setTopRated] = useFetch(urlPop);

  useEffect(() => {
    setTopRated([]);
  }, []);

  console.log(topRated);

  return (
    <>
      <h1 className="slides__title">Peliculas más vistas</h1>
      <div className="slides">
        <Swiper
          className="slides__box"
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
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
}
