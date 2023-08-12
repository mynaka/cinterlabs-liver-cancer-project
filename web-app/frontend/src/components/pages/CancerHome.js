import React from 'react';
import '../../App.css';
import HeroSection2 from '../HeroSection2';
import Footer from '../Footer';
import Video from '../Video'; // Import the Video component
import './styles/CancerHome.css';
import CancerHomeNavbar from '../CancerHomeNavbar';

function CancerHome() {
  return (
    <div>
      <CancerHomeNavbar/>
      <div className='home-container'>
        <img
          src={process.env.PUBLIC_URL + '/images2/PHYSCI-2.webp'}
          alt='physci'
          className='Fimage'
        />
        <HeroSection2 />
        
        <div className='video-container'>
    <Video
      src={process.env.PUBLIC_URL + '/videos/sample.mp4'} // Replace with your video source
      autoPlay
      controls
    />
  </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default CancerHome;
