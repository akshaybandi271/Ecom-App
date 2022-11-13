import './App.css'
import {Header} from './Components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'



function App() {

  return (
    <>
      <Header />
      
      <Routes>
         <Route exact path='/' element={<Home />} />
         <Route path='/cart' element={<Cart />} />
      </Routes>

    </>
  )
}


export default App
