import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='mt-1' style={{height:500}}>
     <center>
     <form className=' text-white m-30'>
  <div className='bg-dark rounded-3 m-20 py-10'>
  <div className='mt-30'>
      <h1 className='text-white text-center'>Welcome to AkPros Login page</h1>
     </div>
  <div className=" form-group col-md-6">
    <label className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group col-md-6 mb-10">
    <label className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group col-md-6">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary"><Link to={'/login'} className='navlink m-30'>Login</Link></button>
    </div>
  </div>
  </div>
</form>
     </center>
    </div>
  )
}

export default Login
