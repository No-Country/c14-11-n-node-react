import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import '../style/home.css'

import { useContext, useEffect } from 'react'
import useFetch from '../hooks/useFecth'
import { Store } from '../Store'
import SlidePop from '../components/SlidePop'
import SlideTopRated from '../components/SlideTopRated'

const Home = () => {
  const {
    state: { allTopRated, allPopular },
    dispatch,
  } = useContext(Store)

  const url = `http://localhost:4000/list/upcomings`
  const urlTR = 'http://localhost:4000/list/top'
  const urlPop = 'http://localhost:4000/list/popmovies'

  const [movies, setMovies] = useFetch(url)
  const [topRated, setTopRated] = useFetch(urlTR)
  const [popular, setPopular] = useFetch(urlPop)

  useEffect(() => {
    setMovies([])
    setTopRated([])
    setPopular([])
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOP_RATED', payload: topRated })
  }, [topRated])

  useEffect(() => {
    dispatch({ type: 'GET_POPULAR', payload: popular })
  }, [popular])

  return (
    <section className="container__home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        speed={2000}
      >
        {movies?.slice(0, 7).map((movie) => (
          <SwiperSlide key={movie.title}>
            <div className="nabvar__card">
              <img src={movie.image} />
              <h1>{movie.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button onClick={() => console.log(allTopRated)}>MAGIA</button>
      <SlideTopRated allTopRated={allTopRated} />
      <SlidePop allPopular={allPopular} />
    </section>
  )
}

export default Home
