import Card from './components/card'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'


export default function App() {

  return (
    <div className='main__container'>

          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
    
    </div>
  )
}
