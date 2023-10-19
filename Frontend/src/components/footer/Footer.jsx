import '../../style/footer.css'

export const Footer = () => {
  return (
    <footer className='main__container__footer'>
      <div className="container__footer">
        
        <div className='linea__footer' ><hr /></div>

        <div className='container__section'>

          <div className="section__footer">
            <h5>Sesion 1 preguntas</h5>
            <ul className="nav flex-column">
              <li ><a href="#" >Home</a></li>
              <li ><a href="#" >Inicio de Sesion</a></li>
              <li ><a href="#" >Registro</a></li>
            </ul>
          </div>

          <div className="section__footer">
            <h5>Sesion 2 comentarios</h5>
            <ul className="nav flex-column">
              <li ><a href="#" >Home</a></li>
              <li ><a href="#" >Inicio de Sesion</a></li>
              <li ><a href="#" >Registro</a></li>
            </ul>
          </div>

          <div className="section__footer ">
            <h5>Sesion 3 suscripciones</h5>
            <ul className="nav flex-column">
              <li ><a href="#" >Home</a></li>
              <li ><a href="#" >Inicio de Sesion</a></li>
              <li ><a href="#" >Registro</a></li>
            </ul>
          </div>

        </div>

        <div className='linea' ><hr /></div>

        <div className="footer__end">
          <ul className="list__footer__end">
            <li className="nav-item"><a href="/" >Home</a></li>
            <li className="nav-item"><a href="/login" >Inicio de Sesion</a></li>
            <li className="nav-item"><a href="/register" >Registro</a></li>
            <li className="nav-item"><a href="#" >FAQs</a></li>
            <li className="nav-item"><a href="#" >About</a></li>
          </ul>
          <p className="company">&copy; 2023 NoCountry, Inc</p>
        </div>

      </div>
    </footer>
  )
}
