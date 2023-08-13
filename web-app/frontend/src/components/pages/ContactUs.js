import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar'
import './styles/About.css'; // Import the CSS file for About page styles
import Contact from '../contact';
function ContactUs() {
  return (
    <>
    <div className ='body-light'>
      <Navbar />
 <Contact/>
      <div className='footer'>
        <Footer />
      </div>
    </div>
      
    </>
  );
}

export default ContactUs;
