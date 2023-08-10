import React from 'react'
import Navbar from '../Navbar'
import '../pages/styles/Research.css'
import Footer from '../Footer';

//ref: https://codepen.io/ResoGuy/pen/PaaWde

const Card = (props) => (
    <div className="card">
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
      <div className="card-content">
        <h2>{ props.title }</h2>
      </div>
    </div>
  );


  const CardContainer = (props) => (
    <div className="cards-container">
      {
        props.cards.map((card) => (
          <Card title={ card.title }
            imgUrl={ card.imgUrl } />
        ))
      }
    </div>
  );


export const Research = () => {
//TODO: Change images
    const researchData = [
        {id: 1, title: 'Computational Arts', imgUrl: 'https://unsplash.it/200/200'},
        {id: 2, title: 'Data Science',  imgUrl: 'https://unsplash.it/201/200'},
        {id: 3, title: 'Automation',  imgUrl: 'https://unsplash.it/200/201'},
        {id: 4, title: 'Robotics',  imgUrl: 'https://unsplash.it/201/201'},
        {id: 5, title: 'Agriculture',  imgUrl: 'https://unsplash.it/202/200'},
        {id: 6, title: 'Environmental',  imgUrl: 'https://unsplash.it/200/199'},
        {id: 7, title: 'CARD 7',  imgUrl: 'https://unsplash.it/199/199'},
        {id: 8, title: 'CARD 8',  imgUrl: 'https://unsplash.it/199/200'},
        {id: 9, title: 'CARD 9',  imgUrl: 'https://unsplash.it/200/198'},
        {id: 10, title: 'CARD 10',  imgUrl: 'https://unsplash.it/198/199'},
      ]
  return (
    <div className='body-dark'>
        <Navbar />
        <div className='spacer'> &nbsp;</div>

        <div className="container">
        <div className='spaced'> &nbsp;</div>

        <h1 className='researchHeading'>
          Our Research and Services
        </h1>
        <div className='spacer'> &nbsp;</div>

        <CardContainer cards={ researchData } />
      </div>

      <Footer />

    </div>
  )
}
