import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
  return (
       
     <div className='bg-dark p-3'>
        
        <img src="./logo1.jpg" width={40} className='rounded-5'/>
     <p className='text-white d-inline'>AkPros</p>
     <center className='d-inline'>
     <Link to={'/home'} className='navlink'>Home</Link>
      <Link to={'/beautyproducts'} className='navlink'>Beauty Product💄</Link>
      <Link to={'/kidz'} className='navlink'>Kidz👧</Link>
      <Link to={'/contact'} className='navlink'>Contact📞</Link>
      <Link to={'/cart'} className='navlink'>Cart🛒</Link>
     </center>
     <button  className='login'><Link to={'/login'} className='navlink'>Login</Link></button>
     <button className='login'><Link to={'/register'} className='navlink'>Register</Link></button>
     </div>

  
  )
}

export default NavBar
