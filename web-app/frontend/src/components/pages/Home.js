import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import './styles/Home.css'; // Import the Home.css file

function Home() {
  return (
    <div className='home-container'>
       <div className='space'></div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
