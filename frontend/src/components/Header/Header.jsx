import React, { useState } from 'react';


function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <div className='main-div'>
      <div className='header'>
        <div className="eventra">Eventra</div>

        <div className="search-wrapper">
          <div className="search-opportunity">
            <span className="search-icon">🔍</span>
            <input placeholder='Search Opportunities' onClick={handleClick} />
          </div>

          {showDropdown && (
            <div className="search-dropdown">
              <div className="dropdown-title">Categories</div>
              <div className="dropdown-tags">
                <span>Hackathons</span>
                <span>Technical Events</span>
                <span>Non-Technical Events</span>
                <span>Workshops</span>
                <span>Articles</span>
              </div>
            </div>
          )}
        </div>

        <div className="events">
          <div>Hackathons</div>
          <div>Technical Events</div>
          <div>Non-Technical Events</div>
        </div>

        <div className="Business">
          <button>➕ Host</button>
          <button>💼 For Business</button>
        </div>

        <div className="icon-container">
          <img src="https://cdn.unstop.com/assets/icons/chat.svg" alt="Chat Icon" />
          <img src="https://cdn.unstop.com/assets/icons/notifications.svg" alt="Notification Icon" />
          <div className="profile-icon">
            <img src="/images/profile-icon.jpg" alt="avatar" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
