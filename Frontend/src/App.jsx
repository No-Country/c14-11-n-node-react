import {Route, Router, Routes} from 'react-router-dom'
import { Auth } from './components/Login/Auth'
import Card from './components/card'
import LandingPage from './components/landing page/landing page'


export default function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<><LandingPage/></>}/>
      <Route path='/login' element={<><Auth/></>}/>
     </Routes>
    
      {/* <Auth />
      <Card /> */}
    </div>
  )
}
