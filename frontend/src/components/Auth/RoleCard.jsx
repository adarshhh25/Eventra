import React from 'react';
import { MdGroups } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";

function RoleCard(props) {
  const isCandidate = props.role === "candidate";
  const isSelected = props.selectedRole === props.role;

  const cardStyle = {
    backgroundColor: isCandidate ? '#ffefb7ff' : '#a9d0ffff',
    border: isSelected
      ? (isCandidate ? '3px solid #735903' : '3px solid #4b99f9')
      : 'none',
    cursor: 'pointer',
  };

  return (
    <div 
      className='rolecard' 
      style={cardStyle} 
      onClick={() => props.onSelect(props.role)}
    >
      <div className="icons">
        {isCandidate ? (
          <MdGroups size={38} color="#8c6d00" />
        ) : (
          <RiUserSearchLine size={35} color="#007bff" />
        )}
      </div>
      
      <div className="text">
        {isCandidate ? (
          <p>
            Sign up as a Candidate<br />
            <span className="subtext">Compete, learn, and apply for all types of events</span>
          </p>
        ) : (
          <p>
            Sign up as a Host<br />
            <span className="subtext">Host all types of competitions and promote your event</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default RoleCard;
