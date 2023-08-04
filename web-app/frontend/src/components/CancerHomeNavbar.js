import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CancerHomeNavbar.css';
import {Button} from './Button'; // Assuming you have a Button component defined

function CancerHomeNavbar({ closeMobileMenu }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className='cnavbar'>
      <div className='cnavbar-container'>
        <Link to='/' className='cnavbar-logo' onClick={closeMobileMenu}>
        <img src={process.env.PUBLIC_URL + '/images2/logo2.png'} alt='Logo Cancer Research' className='clogo-image' />
          <i className='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'cnav-menu active' : 'cnav-menu'}>
          <li className='cnav-item'>
            <Link to='/' className='cnav-links' onClick={closeMobileMenu}>
              CINTERLABS
            </Link>
          </li>
          <li className='cnav-item'>
            <Link to='/cancerhome' className='cnav-links' onClick={closeMobileMenu}>
Home
            </Link>
          </li>
          <li className='cnav-item'>
            <Link to='/dataportal' className='cnav-links' onClick={closeMobileMenu}>
              Data Portal
            </Link>
          </li>
          <li className='cnav-item'>
            <Link to='/cancerresearch' className='cnav-links' onClick={closeMobileMenu}>
              Research
            </Link>
          </li>
          <li className='cnav-item'>
            <Link to='/donate' className='cnav-links' onClick={closeMobileMenu}>
              Donate
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
        {Button && <Button buttonStyle='btn--secondary' >Contact Us</Button>}
        <div className='spacer'></div>
        {Button && <Button buttonStyle='btn--secondary' >Log in</Button>}
      </div>
    </nav>
  );
}

export default CancerHomeNavbar;
