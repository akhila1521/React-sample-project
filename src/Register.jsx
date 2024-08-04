import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  return (
<div className='mt-1 '>

<div className='container'>
     
<form className='bg-dark text-white m-20 rounded-3'>
  <div className='m-20 mb-30'>
     <div className='mt-30'>
      <h1 className='text-white text-center'>Welcome to AkPros Register page</h1>
     </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>Email</label>
      <input type="email" className="form-control"  placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label>Password</label>
      <input type="password" className="form-control"  placeholder="Password"/>
    </div>
  </div>
  <div className="form-group col-md-6">
    <label>Address</label>
    <input type="text" className="form-control" placeholder="1234 Main St"/>
  </div>
  <div className="form-group col-md-6">
    <label>Address 2</label>
    <input type="text" className="form-control"  placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label>City</label>
      <input type="text" className="form-control"  />
    </div>
    <div className="form-group col-md-4">
      <label>State</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-2">
      <label>Zip</label>
      <input type="text" className="form-control" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary m-10"><Link to={'/login'} className='navlink'>Register</Link></button>
  <p className='text-center m-40'>If you Registered Already Click on <Link to={'/login'}>Login</Link></p>
  </div>
 </form>
 </div>
    
    </div>
  )
}

export default Register
