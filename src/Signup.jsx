import React from 'react'

import { Link } from 'react-router-dom'
export default function Signup() {
  return (
 <>
  <div className="login-page">
  <div className="form">
    <h1 className='heading1'>Signup Foam</h1>
    <form className="register-form">
      <input type="text" placeholder="Name"/>
      <input type="password" placeholder="Password"/>
      <input type="text" placeholder="Email "/>
      <button className='btn'>Signup</button>
      <p className="message">Don't have an account ?<Link to='/'> Signup Here</Link></p>
    </form>
   
  </div>
</div>
 </>
  )
}
