import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import RoleCard from './RoleCard';

const Signup = () => {
  const[selected, setSelected] = useState('candidate');
  const navigate = useNavigate();

   const handleSelect = (role) => {
    setSelected(role); 
  };

  const handleNext = () => {
    navigate("/Detailform")
  }

  return (
    <div className='Signup'>
        <div className="signup-box">
        <h1>Create a new account</h1>
            <div className="ToselectCandidateorHost">
                 <RoleCard
                  role="candidate"
                  onSelect={handleSelect}
                 />
                 <RoleCard
                  role="host"
                  onSelect={handleSelect}
                 />
                  <div className="already-account">
                    <p>
                      Already have an account?
                      <Link to="/" className="no-underline"> Login</Link>
                    </p>
                    <button
                    onClick={handleNext}
                    >Next</button>
                  </div>
            </div>
        </div>
    </div>
  )
}


export default Signup;
