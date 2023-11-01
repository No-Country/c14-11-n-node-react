import '../style/home.css'

const SlideTopRated = ({ allTopRated }) => {
  return (
    <div>
      <h1>Mas vistas</h1>
      <div className="caja">
        {allTopRated?.map((show) => {
          return (
            <div className="carta" key={show.id}>
              <h1>{show.original_title}</h1>
              <img src={show.image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SlideTopRated
