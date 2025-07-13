import { useState } from 'react';
import {Link} from 'react-router-dom';
import RoleCard from './RoleCard';

const Signup = () => {
  const[selected, setSelected] = useState('candidate');

   const handleSelect = (role) => {
    setSelected(role); 
  };

  return (
    <div className='Signup'>
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
                    <button>Next</button>
                  </div>
            </div>
    </div>
  )
}


export default Signup;
