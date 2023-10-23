import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../style/home.css"

import { useEffect} from "react";
import useFetch from "../hooks/useFecth";
import Cards from "../pages/Cards";

const Home = () => {

  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url = `http://localhost:4000/list/upcomings`
  const [movies, setMovies] = useFetch(url)

  useEffect(() => {
    setMovies([])
  }, [])

  return (
    <section className="container__home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={3000}
        className="mySwiper"
      >
        {movies?.map(movie =>(
          <SwiperSlide key={movie.title}>
            <div className="nabvar__card">
              <img src={baseURL + movie.poster_path}/>
              <h1>{movie.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Cards/>
    </section>
  );
};

export default Home;
