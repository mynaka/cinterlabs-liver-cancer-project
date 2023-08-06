import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className='spacer'></div>
      <h2>The Computational Interdisciplinary Research Labs (CINTERLABS)</h2>
      <hr></hr>
      <p className='shortdesc'>Computational Interdisciplinary Research Laboratories (CINTERLabs) is UPLB's arm in strengthening research in computational arts, data science, automation and robotics for the enhancement and application of agriculture and environmental monitoring. Armed with the goal for excellence and research advancement, our institution helps ensure that our research capacity is able to compete with other Asian universities. </p>  {/*ref : https://ovcre.uplb.edu.ph/press/features/item/537-what-s-with-all-of-these-centers*/}
      <div className='hero-btns'>
        <Button
        linkTo='/about'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          See more
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Log-in <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
