import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detailform() {
  const { role } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
       setFormData(prev => ({
        ...prev,
        [e.target.value]: e.target.value
       }))
  };

  const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           
        } catch (error) {
          
        }
  }

  return (
    <div className="details-form-container">
      <div className="detail-form">
        <h1>{role === "candidate" ? "Sign up as Candidate" : "Sign up as Recruiter"}</h1>
        
        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input id="first-name" name="firstName" type="text" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name </label>
              <input id="last-name" name="lastName" type="text" placeholder="Last Name" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">{role === "candidate" ? "Email *" : "Organisation Email *"}</label>
            <input id="email" name="email" type="email" placeholder={role === "candidate" ? "Email" : "Official Email"} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input id="phone" name="phone" type="tel" placeholder="+91" required />
          </div>

          <div className="form-group gender">
            <label>Gender *</label>
            <div className="gender-options">
              <button type="button">Male</button>
              <button type="button">Female</button>
              <button type="button">More Options</button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input id="password" name="password" type="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password *</label>
              <input id="confirm-password" name="confirmPassword" type="password" required />
            </div>
          </div>

          <div className="already-account">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
            <button type="submit" className="submit-button" onClick={handleSubmit}>Next</button>
          </div>
          {/* <button type="submit" className="submit-btn">Next</button> */}
        </form>
      </div>
    </div>
  );
}

export default Detailform;
