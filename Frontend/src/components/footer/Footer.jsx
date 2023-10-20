import '../../style/footer.css'

export const Footer = () => {
  return (
    <footer className='main__container__footer'>
      <div className="container__footer">
        
        
        
        <div className='footer__linea'></div>

        <div className='container__section'>

          <div className="section__footer">
            <h5>Sesion 1 preguntas</h5>
            <ul >
              <li ><a className="footer_link" href="#" >Home</a></li>
              <li ><a className="footer_link" href="#" >Inicio de Sesion</a></li>
              <li ><a className="footer_link" href="#" >Registro</a></li>
            </ul>
          </div>

          <div >
            <h5>Sesion 2 comentarios</h5>
            <ul className="nav flex-column">
              <li ><a className="footer_link" href="#" >Home</a></li>
              <li ><a className="footer_link" href="#" >Inicio de Sesion</a></li>
              <li ><a className="footer_link" href="#" >Registro</a></li>
            </ul>
          </div>

          <div className="section__footer ">
            <h5>Sesion 3 suscripciones</h5>
            <ul >
              <li   ><a className="footer_link" href="#" >Home</a></li>
              <li ><a className="footer_link" href="#" >Inicio de Sesion</a></li>
              <li ><a className="footer_link" href="#" >Registro</a></li>
            </ul>
          </div>

        </div>

        <div className='footer__linea'></div>


        <div className="footer__end">
          <ul className="list__footer__end">
            <li ><a className="footer_link" href="/" >Home</a></li>
            <li ><a className="footer_link" href="/login" >Inicio de Sesion</a></li>
            <li ><a className="footer_link" href="/register" >Registro</a></li>
            <li ><a className="footer_link" href="#" >FAQs</a></li>
            <li ><a className="footer_link" href="#" >About</a></li>
          </ul>
          <p className="company">&copy; 2023 NoCountry, Inc</p>
        </div>

      </div>
    </footer>
  )
}
