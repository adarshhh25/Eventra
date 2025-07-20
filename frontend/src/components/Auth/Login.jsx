import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
      setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value
      }));
  }

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
    });

    const result = await res.json();

    if(res.ok){
      alert("Logged In Successfully")
      navigate("/homepage")
      
    }
    else {
      alert(`Error: ${result.message || "Something went wrong"}`)
    }
    } catch (error) {
      console.log(error)
      alert("Failed to login to your account")
    }
 }

  return (
    <div className="center"> 
      <div className="outline">
      <h1 className='center-text'>Log in</h1>
        <form className='login-form'>
            <input
            type='email'
            name='email'
            onChange={handleChange}
            placeholder='Email Id'
            required
            />
            <input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='Enter Your Password'
            required
            />
            <button onClick={handleSubmit}>Login</button>
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
