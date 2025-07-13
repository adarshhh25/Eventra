import React from 'react';
import { MdGroups } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";

function RoleCard(props) {
   
  const setIcon = () => {
     if(props.role === "candidate") {
        return true;
     }
     return false;
  }

  return (
    <div className='rolecard'>
      <div className="icons">
        {setIcon() ? <MdGroups size={40} color="#8c6d00" /> : <RiUserSearchLine size={40} color="#007bff" /> }
      </div>
      <div className="text">
        {setIcon() ? <p>Sign up as a Candidate</p> : <p>Sign up as a Host</p>}
      </div>
    </div>
  )
}

export default RoleCard
