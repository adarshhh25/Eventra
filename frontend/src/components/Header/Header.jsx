import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Header({onProfileClick}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const searchWrapperRef = useRef(null);

  const handleClick = () => {
    setShowDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='main-div'>
      <div className='header'>
        <div className="eventra">Eventra</div>

        <div className="search-wrapper" ref={searchWrapperRef}>
          <div className="search-opportunity">
            <span className="search-icon">🔍</span>
            <input
              placeholder='Search Opportunities'
              onClick={handleClick}
              className={showDropdown ? 'expanded' : ''}
            />
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

        <div className={`events ${showDropdown ? 'hidden' : ''}`}>
          <Link to="/hackathons"><div>Hackathons</div></Link>
          <Link to="/technical-events"><div>Technical Events</div></Link>
          <Link to="/non-technical-events"><div>Non-Technical Events</div></Link>
        </div>


        <div className="Business">
          <button>➕ Host</button>
          <button>💼 For Business</button>
        </div>

        <div className="icon-container">
          <img src="https://cdn.unstop.com/assets/icons/chat.svg" alt="Chat Icon" />
          <img src="https://cdn.unstop.com/assets/icons/notifications.svg" alt="Notification Icon" />
          <div className="profile-icon" onClick={onProfileClick}>
            <img src="/images/profile-icon.jpg" alt="avatar" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
