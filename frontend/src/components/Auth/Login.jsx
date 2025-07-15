import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="center"> 
      <div className="outline">
      <h1 className='center-text'>Log in</h1>
        <form className='login-form'>
            <input
            type='email'
            placeholder='Email Id'
            required
            />
            <input
            type='password'
            placeholder='Enter Your Password'
            required
            />
            <button>Login</button>
        </form>
      <p className="center-text">
          Don't have an account? 
          <Link to="/signup" className='no-underline'>Sign up</Link>
      </p>
      </div>
    </div>
  )
}

export default Login
