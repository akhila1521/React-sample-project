
import './App.css'
import { Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import BeautyProducts from './BeautyProducts'
import Contact from './Contact'
import Kidz from './Kidz'
import Cart from './Cart'
import Login from './Login'
import Register from './Register'
function App() {
document.title = "AkPros Page"
  return (
    <>
    <div>
    <NavBar />
    </div>

      <Routes>
        
        <Route path='/home' Component={Home}></Route>
        <Route path='/' Component={Home}></Route>
        <Route path='/beautyproducts' Component={BeautyProducts}></Route>
        <Route path='/kidz' Component={Kidz}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
      
    </>
  )
}

export default App
