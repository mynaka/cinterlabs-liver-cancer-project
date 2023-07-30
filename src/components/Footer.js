import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <section className='footer-bottom'>
        <div className='footer-bottom-left'>
          {/* Footer Content - Left Side */}
          &copy; All Rights Reserved 2023
        </div>
        {/* <div className='footer-bottom-right'>
        <Link to='/terms-of-service'>Terms of Service</Link>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/copyright-trademark'>
              Copyright & Trademark
            </Link>
        </div> */}
      </section>
    </div>
  );
}

export default Footer;
