import React, { useContext } from 'react'
import useFetch from '../hooks/useFecth'
import Cards from '../pages/Cards'
import { Store } from '../Store'

const Filters = () => {
  const {
    state: {
      // allMovies,
      movies,
    },
    dispatch,
  } = useContext(Store)

  const url = 'http://localhost:4000/list/upcomings'
  const url2 = 'http://localhost:4000/filters/genres'

  const [moviesF, setMoviesF] = useFetch(url)
  const [filters, setFilters] = useFetch(url2)

  const handleFilters = ({ id }) => {
    // const newCall = await axios.get(`${url}/${id}`)
    console.log(id)
    dispatch({ type: 'GET_MOVIES_FILTERED', payload: moviesF })
  }

  React.useEffect(() => {
    setMoviesF()
    setFilters()
  }, [])

  return (
    <main>
      <section>
        <select>
          {filters?.map((filtro) => (
            <option onClick={() => handleFilters(filtro.id)} key={filtro.id}>
              {filtro.name}
            </option>
          ))}
        </select>
        {/* <button onClick={() => handleFilters(idFiltro)}>Magia</button> */}
      </section>
      <section>
        <h3>Movies</h3>
        {moviesF?.map((movie) => (
          <Cards key={movie.id} name={movie.original_title} img={movie.image} />
        ))}
      </section>
    </main>
  )
}

export default Filters
