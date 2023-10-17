
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Nabvar from './components/navbar/nabvar'


export default function App() {

  return (
    <div className='main__container'>
         <Nabvar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>

    </div>
  )
}
