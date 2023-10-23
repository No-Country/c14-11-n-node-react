const Cards = ({ name, img }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="" />
    </div>
  )
}

export default Cards
