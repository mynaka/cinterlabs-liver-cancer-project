import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Updates</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images2/newsph.jpg'
              text='Lorem Ipsum'             
              path='/newsarticle'
            />
            <CardItem
              src='images2/newsph.jpg'
              text='Lorem Ipsum'  
              path='/newsarticle'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images2/newsph.jpg'
              text='Lorem Ipsum'  
              path='/newsarticle'
            />
            <CardItem
              src='images2/newsph.jpg'
              text='Lorem Ipsum' 
              path='/newsarticle'
            />
            <CardItem
              src='images2/newsph.jpg'
              text='Lorem Ipsum ..............' 
              path='/newsarticle'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
