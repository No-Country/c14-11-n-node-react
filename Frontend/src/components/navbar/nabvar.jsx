import Auth from "../Login/Auth"
import "../..//style/nabvar.css"

//Se trabajo en el componente nabvar 
const Nabvar = () => {
  return (
    <div className="container__nabvar">
        <ul>
       <Auth/>
        </ul>
    </div>
  )
}

export default Nabvar