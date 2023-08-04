import React, { useState } from 'react';
import './HeroSection2.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const HeroSection2 = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [showAbout, setShowAbout] = useState(false);

  const handleReadMoreClick = () => {
    setShowAbout(true); // Set showAbout to true to display the AboutPage
    navigate('/aboutliver'); // Use navigate function to redirect to the About page
  };
  return (
    <div className="hero-section2">
      <div className="hero-content2">
        <div className="hero-left2">
          <img src='images2/LiverArt.png' alt="Liver Art" className="hero-image-liver2" />
        </div>
        <div className="hero-right2">
          <h3 className='cinterlabs'> UPLB CINTERLABS's</h3>
          <h2 className="hero-title2">LIVER CANCER</h2>
          <h2 className="hero-title2-1">RESEARCH PROJECT</h2>
          <p className="hero-subtitle2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis urna leo, vel pharetra nisi hendrerit sit amet. Sed at convallis velit, vitae cursus orci. Phasellus ac lorem interdum, egestas orci quis, pulvinar erat. Quisque imperdiet risus non turpis ullamcorper congue. Praesent sit amet rhoncus nulla. Donec eget placerat neque. Sed ante dui, porttitor in molestie id, fringilla vitae odio. Nunc tortor nulla, porttitor a luctus ut, interdum id mauris. </p>
          
          <button className="hero-cta-button2" onClick={handleReadMoreClick}>Read More</button>
        </div>
      </div>
    </div>
  );
};


export default HeroSection2;
