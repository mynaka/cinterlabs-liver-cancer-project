import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection2 from '../HeroSection2';
import Footer from '../Footer';
import './styles/CancerHome.css'; // Import the Home.css file
import CancerHomeNavbar from '../CancerHomeNavbar';

function CancerHome() {
  return (
    <div>
      <CancerHomeNavbar/>
    <div className='home-container'>
    <img
          src={process.env.PUBLIC_URL + '/images2/PHYSCI-2.webp'} // Replace 'your-image.jpg' with the actual image filename and extension
          alt='physci'
          className='Fimage'
        />
      <HeroSection2 />
      <Cards />
      <Footer />
    </div>
    </div>
  );
}

export default CancerHome;
