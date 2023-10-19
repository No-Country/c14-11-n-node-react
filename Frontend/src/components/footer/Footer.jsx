import '../../style/footer.css'

export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className='linea' ><hr /></div>

        <div className='sections'>
          
           <div className="section 1">
             <h5>Sesion 1 preguntas</h5>
              <ul className="nav flex-column">
                <li ><a href="#" >Home</a></li>
                <li ><a href="#" >Inicio de Sesion</a></li>
                <li ><a href="#" >Registro</a></li>
              </ul>
           </div>
          
          <div className="section 2">
             <h5>Sesion 2 comentarios</h5>
              <ul className="nav flex-column">
                <li ><a href="#" >Home</a></li>
                <li ><a href="#" >Inicio de Sesion</a></li>
                <li ><a href="#" >Registro</a></li>
              </ul>
            </div>

            <div className="section 3">
             <h5>Sesion 3 suscripciones</h5>
              <ul className="nav flex-column">
                <li ><a href="#" >Home</a></li>
                <li ><a href="#" >Inicio de Sesion</a></li>
                <li ><a href="#" >Registro</a></li>
              </ul>
            </div>
          
       </div>

        <div className='linea' ><hr /></div>

         <footer className="footer">
            <ul className="list">
              <li className="nav-item"><a href="/" >Home</a></li>
              <li className="nav-item"><a href="/login" >Inicio de Sesion</a></li>
              <li className="nav-item"><a href="/register" >Registro</a></li>
              <li className="nav-item"><a href="#" >FAQs</a></li>
              <li className="nav-item"><a href="#" >About</a></li>
              </ul>
          <p className="company">&copy; 2023 NoCountry, Inc</p>
        </footer>
    
      </div>
    </>
  )
}
