import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true); // New state to control navbar visibility

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleDropdown = () => setDropdown(!dropdown);

  const handleLiverCancerClick = () => {
    if (click && dropdown) {
      closeMobileMenu();
    }
    setDropdown(!dropdown);
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    // Close the mobile menu when navigating to '/research/topic1'
    if (location.pathname === '/cancerhome') {
      closeMobileMenu();
      setShowNavbar(false); // Hide the navbar when on '/research/topic1'
    } else {
      setShowNavbar(true); // Show the navbar for other routes
    }
  }, [location]);

  window.addEventListener('resize', showButton);

  return (
    <>
      {showNavbar && ( // Conditional rendering based on the showNavbar state
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={process.env.PUBLIC_URL + '/images2/logo.png'} alt='Logo' className='logo-image' />
            </Link>
            <div className='mainmenu'>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                    News
                  </Link>
                </li>
                <li className='nav-item' onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                  <Link to='/research' className='nav-links' onClick={handleLiverCancerClick}>
                    Research <i className={dropdown ? 'fas fa-caret-up' : 'fas fa-caret-down'} />
                  </Link>
                  {dropdown && (
                    <ul className='dropdown-menu'>
                      {/* Add dropdown menu items */}
                      <li className='dropdown-item'>
                        <Link to='/cancerhome' className='nav-links' onClick={closeMobileMenu}>
                          Liver Cancer Research
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='/research/publications' className='nav-links' onClick={closeMobileMenu}>
                          Publications
                        </Link>
                      </li>
                      <li className='dropdown-item'>
                        <Link to='/research/projects' className='nav-links' onClick={closeMobileMenu}>
                          Projects
                        </Link>
                      </li>
                      {/* Add more dropdown menu items here if needed */}
                    </ul>
                  )}
                </li>
                <li className='nav-item'>
                  <Link to='/contribute' className='nav-links' onClick={closeMobileMenu}>
                    Contribute
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {button && <Button linkTo='/login' buttonStyle='btn--outline'>Log-in</Button>}
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;