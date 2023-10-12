import { Auth } from './components/Login/Auth'
import Card from './components/card'
import "./App.css"

export default function App() {
  return (
    <div className='main__container'>
      <Auth />
      <Card />
    </div>
  )
}
