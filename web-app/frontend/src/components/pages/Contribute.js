import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Contribute() {
  return (
    <>
      <div
        className='contri-container'
        style={{ minHeight: '100vh' }} // Use the style attribute with a JavaScript object
      >
        {/* Your content goes here */}
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}
