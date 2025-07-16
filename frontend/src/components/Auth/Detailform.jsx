import React from 'react';
import { useParams } from 'react-router-dom';


function Detailform(props) {
  const { role } = useParams(); 
  return (
    <div className='Details-form'>
      <div className="detail-form">
        <h1>{role === "candidate" ? "Sign up as candidate" : "Sign up as host"}</h1>
        <form className='form'>
          <div className="name-details">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" required placeholder='First Name'/>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" required placeholder='Last Name'/>
          </div>
          <input type='email' placeholder={role === "candidate" ? "Email" : "Offical Email"}required />
          <input type='number' required />
          <div className="gender">
            <button>Male</button>
            <button>Female</button>
          </div>
          <div className="passwords">
            <input type='password'/>
            <input type='password'/>
          </div>
        </form>
           <button>Next</button>
      </div>
    </div>
  )
}


export default Detailform
