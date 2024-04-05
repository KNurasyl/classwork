import { Header } from '../../components/header/header'
import { Promo } from '../../components/promo/promo'
import { Main } from '../main/main'
import './App.css'

function App() {
  return (
    <div className={'App'}>
      <Header/>
      <Promo/>
      <Main/>
    </div>
  )
}

export default App
