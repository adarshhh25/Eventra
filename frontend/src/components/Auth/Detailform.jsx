import React from 'react';
import { useParams } from 'react-router-dom';


function Detailform(props) {
  const { role } = useParams(); 
  return (
    <div>
      <div className="detail-form">
            <h1>{role === "candidate" ? (<p>Sign up as candidate</p>) : (<p>Sign up as host</p>)}</h1>
            <label htmlFor="firstName">First Name<span className="required">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
      </div>
    </div>
  )
}

export default Detailform
