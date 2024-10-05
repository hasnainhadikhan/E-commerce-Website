import React from 'react'

import { Link } from 'react-router-dom'
export default function Login() {
  return (
 <>
  <div className="login-page">
  <div className="form">
    <h1 className='heading1'>Login Foam</h1>
    <form className="register-form">
      <input type="password" placeholder="Email"/>
      <input type="text" placeholder="Passward "/>
      <button className='btn'>Login</button>
      <p className="message">Already registered ? <Link to='/signup'> Login Here</Link></p>
    </form>
   
  </div>
</div>
 </>
  )
}
