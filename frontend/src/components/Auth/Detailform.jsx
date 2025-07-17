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
            <div class="name-details">
                <div>
                  <label htmlFor="name">Name:</label><br />
                  <input id="name" required/>
                </div>
                <div>
                  <label htmlFor="last-name">Last Name:</label><br />
                  <input id="last-name" required/>
                </div>
              </div>
            <lable htmlFor="email">Email</lable>
            <input id="email" type='email' className="small-input" placeholder={role === "candidate" ? "Email" : "Offical Email"}required />
            <label htmlFor="phone">Phone</label>
            <input htmlFor="phone" type='number'className='small-input' required />
               <div className="gender">
                  <span>Gender</span>
                  <button onClick={(e) => {e.preventDefault()}}>Male</button>
                  <button onClick={(e) => {e.preventDefault()}}>Female</button>
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
