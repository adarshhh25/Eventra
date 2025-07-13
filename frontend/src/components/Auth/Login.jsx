import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="center">
      <h1>Log in</h1>
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
      <p className="signup-message">
          Don't have an account? 
          <Link to="/signup" className='no-underline'> Sign up</Link>
      </p>
    </div>
  )
}

export default Login
