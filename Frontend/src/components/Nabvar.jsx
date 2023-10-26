import { Link, useNavigate } from 'react-router-dom'
import '../style/nabvar.css'
import { useAuth } from '../context/authContext'
import { useState } from 'react'
import axios from 'axios'

const Nabvar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [inputText, setInputText] = useState('')
  const url = `http://localhost:4000/search?name=${inputText}`

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  const handleSearch = async () => {
    const { data } = await axios.get(url)
    console.log(data)
  }

  const handleClick = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <header className="container__nabvar">
      <div className="nabvar__title--icon">
        <Link to={'/'}>
          <i className="bx bx-md bx-movie-play icon_navbar"></i>
        </Link>

        {user && <h2 className="nabvar__title">Hola!! {user?.email}</h2>}
        <div>
          <input type="text" value={inputText} onChange={handleChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {user ? (
        <button className="nabvar__btn" onClick={handleClick}>
          Cerrar sesion
        </button>
      ) : (
        <Link to={'/register'}>
          <button className="nabvar__btn">Registrase</button>
        </Link>
      )}
    </header>
  )
}

export default Nabvar
