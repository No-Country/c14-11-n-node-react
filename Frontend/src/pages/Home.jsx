import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../style/home.css";

import { useEffect } from "react";
import useFetch from "../hooks/useFecth";

const Home = () => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url = `http://localhost:4000/list/upcomings`;
  const [movies, setMovies] = useFetch(url);

  useEffect(() => {
    setMovies([]);
  }, []);

  return (
    <section className="container__home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        speed={2000}
        className="mySwiper"
      >
        {movies?.slice(0, 7).map((movie) => (
          <SwiperSlide key={movie.title}>
            <div className="nabvar__card">
              <img src={baseURL + movie.backdrop_path} />
              <h1>{movie.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </section>
  );
};

export default Home;
