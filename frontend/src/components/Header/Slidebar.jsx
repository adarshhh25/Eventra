import React from 'react';

function Slidebar({isOpen, onClose}) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>X</button>

      {/* Sidebar Content */}
      <div className="profile-section">
        <h2>Adarsh Jha</h2>
        <p>adarshjha4425@gmail.com</p>
      </div>

      {/* Additional menu */}
      <ul>
        <li>My Jobs</li>
        <li>My Opportunities</li>
        <li>Referrals</li>
      </ul>
    </div>
  )
}

export default Slidebar;
