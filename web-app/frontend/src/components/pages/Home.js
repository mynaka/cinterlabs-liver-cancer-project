import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import './styles/Home.css'; // Import the Home.css file
import Navbar from '../Navbar';
function Home() {
  return (
    <div>
      <Navbar/>
       <div className='home-container'>
       <div className='space'></div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
    </div>
    
     

    
  );
}

export default Home;
