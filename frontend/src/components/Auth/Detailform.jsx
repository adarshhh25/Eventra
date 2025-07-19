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
          [e.target.name]: e.target.value
        }))
  };

    const selectGender = (gender) => {
      console.log(gender)
        setFormData(prev => ({
          ...prev,
          gender: gender
          }))
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const res = await fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  
    },      
    body: JSON.stringify(formData)
  });
 
  const result = await res.json();        

  if (res.ok) {
    alert("Account created successfully");
  } else {
    alert(`Error: ${result.message || "Something went wrong"}`);
  }
} catch (error) {
  alert("Network error or server not reachable");
  console.error(error);
}

  }

  return (
    <div className="details-form-container">
      <div className="detail-form">
        <h1>{role === "candidate" ? "Sign up as Candidate" : "Sign up as Host"}</h1>
        
        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First Name *</label>
              <input id="first-name" name="firstName" type="text" placeholder="First Name" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name </label>
              <input id="last-name" name="lastName" type="text" placeholder="Last Name" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">{role === "candidate" ? "Email *" : "Organisation Email *"}</label>
            <input id="email" name="email" type="email" placeholder={role === "candidate" ? "Email" : "Official Email"} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input id="phone" name="phone" type="tel" placeholder="+91" onChange={handleChange} required />
          </div>

          <div className="form-group gender">
            <label>Gender *</label>
            <div className="gender-options">
              <button 
                type="button"
                className={formData.gender === "Male" ? "active" : ""}
                onClick={() => selectGender("Male")}
               >Male</button>
              <button 
                type="button"
                className={formData.gender === "Female" ? "active" : ""}
                onClick={() => selectGender("Female")}
                >Female</button>
              <button 
                type="button"
                className={formData.gender === "Others" ? "active" : ""}
                onClick={() => selectGender("Others")}
                >More Options</button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input id="password" name="password" type="password" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password *</label>
              <input id="confirm-password" name="confirmPassword" type="password" onChange={handleChange} required />
            </div>
          </div>

          <div className="already-account">
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
            <button type="submit" className="submit-button" onClick={handleSubmit}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Detailform;
