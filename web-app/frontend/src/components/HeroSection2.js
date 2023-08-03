import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection2() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className='spacer'></div>
      <h2>Another Hero Section</h2>
      <hr></hr>
      <p className='shortdesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh massa, scelerisque et elementum eu, malesuada eget dui. Proin malesuada congue massa, id rutrum diam. Mauris egestas neque eu aliquam ultricies. Etiam blandit dui ante, sit amet luctus nisl pretium a. Proin rutrum risus iaculis tristique fermentum. Proin non auctor sapien. In volutpat elit vitae semper consequat. Quisque dictum mauris magna, eget pellentesque ex varius quis. Phasellus vitae vulputate eros.</p>
      <div className='hero-btns'>
        <Button
          linkTo='/services'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View Services
        </Button>
        <Button
          linkTo='/contact'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Contact Us <i className='far fa-envelope' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection2;
