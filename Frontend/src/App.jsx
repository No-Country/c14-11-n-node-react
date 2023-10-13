import {Route, Router, Routes} from 'react-router-dom'
import { Auth } from './components/Login/Auth'
import Card from './components/card'

export default function App() {
  return (
    <div>
      <Auth />
      <Card />
    </div>
  )
}
