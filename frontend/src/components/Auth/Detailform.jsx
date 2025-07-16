import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Detailform(props) {
  const { role } = useParams(); 
  return (
    <div className='Details-form'>
      <div className="detail-form">
        <h1>{role === "candidate" ? "Sign up as candidate" : "Sign up as host"}</h1>
        <form className='form'>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" required placeholder='First Name'/>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" required placeholder='Last Name'/>
            <label htmlFor="email">Email</label>
            <input htmlFor="email" type='email' placeholder={role === "candidate" ? "Email" : "Offical Email"}required />
            <label htmlFor="phone">Phone</label>
            <input htmlFor="phone" type='number' required />
               <div className="gender">
                  <span>Gender</span>
                  <button>Male</button>
                  <button>Female</button>
               </div>
          <div className="passwords">
            <label htmlFor="password">Password</label>
            <input id="password" type='password'/>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input id="password" type='password'/>
          </div>
          <div className="already-account">
                    <p>
                      Already have an account?
                      <Link to="/" className="no-underline"> Login</Link>
                    </p>
                    <button>Next</button>
                  </div>
        </form>
      </div>
    </div>
  )
}


export default Detailform
