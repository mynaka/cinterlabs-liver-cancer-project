import React from 'react'
import Navbar from '../Navbar'
import '../pages/styles/Research.css'
import Footer from '../Footer';

//ref: https://codepen.io/ResoGuy/pen/PaaWde

// const Card = (props) => (
//     <div className="card">
//       <img src={ props.imgUrl } 
//         alt={ props.alt || 'Image' } />
//       <div className="card-content">
//         <h2>{ props.title }</h2>
//       </div>
//     </div>
//   );


//   const CardContainer = (props) => (
//     <div className="cards-container">
//       {
//         props.cards.map((card) => (
//           <Card title={ card.title }
//             imgUrl={ card.imgUrl } />
//         ))
//       }
//     </div>
//   );


export const Research = () => {
//TODO: Change images
    // const researchData = [
    //     {id: 1, title: 'Computational Arts', imgUrl: 'https://unsplash.it/200/200'},
    //     {id: 2, title: 'Data Science',  imgUrl: 'https://unsplash.it/201/200'},
    //     {id: 3, title: 'Automation',  imgUrl: 'https://unsplash.it/200/201'},
    //     {id: 4, title: 'Robotics',  imgUrl: 'https://unsplash.it/201/201'},
    //     {id: 5, title: 'Agriculture',  imgUrl: 'https://unsplash.it/202/200'},
    //     {id: 6, title: 'Environmental',  imgUrl: 'https://unsplash.it/200/199'},
    //     {id: 7, title: 'CARD 7',  imgUrl: 'https://unsplash.it/199/199'},
    //     {id: 8, title: 'CARD 8',  imgUrl: 'https://unsplash.it/199/200'},
    //     {id: 9, title: 'CARD 9',  imgUrl: 'https://unsplash.it/200/198'},
    //     {id: 10, title: 'CARD 10',  imgUrl: 'https://unsplash.it/198/199'},
    //   ]
  return (
    // <div className='body-dark'>
    //     <Navbar />
    //     <div className='spacer'> &nbsp;</div>

    //     <div className="container">
    //     <div className='spaced'> &nbsp;</div>

    //     <h1 className='researchHeading'>
    //       Our Research and Services
    //     </h1>
    //     <div className='spacer'> &nbsp;</div>

    //     <CardContainer cards={ researchData } />
    //   </div>

    //   <Footer />

    // </div>
    <div>
      <Navbar/>

    <div className='oble2'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <div className='spacer'></div>
      <div>
      <h2>The Computational Interdisciplinary Research Labs (CINTERLABS)<br /> RESEARCH AND EXTENSION</h2>
      </div>
      <hr></hr>
      <p className='shortdescresearch'>Computational Interdisciplinary Research Laboratories (CINTERLabs) is UPLB's arm in strengthening research in computational arts, data science, automation and robotics for the enhancement and application of agriculture and environmental monitoring. Armed with the goal for excellence and research advancement, our institution helps ensure that our research capacity is able to compete with other Asian universities. </p>  {/*ref : https://ovcre.uplb.edu.ph/press/features/item/537-what-s-with-all-of-these-centers*/}
    
    </div>
    <div className='bullet-list'>
        <div className='container'>
          <div className='list-column'>
            
            <ul>
              <li><a href='http://localhost:3000/cancerhome'>Liver Cancer Research</a></li>
              <li><a href='#'>Data Science</a></li>
              <li><a href='#'>Automation</a></li>
            </ul>
          </div>
          <div className='list-column'>
            
            <ul>
              <li><a href='#'>Robotics</a></li>
              <li><a href='#'>Agriculture</a></li>
              <li><a href='#'>Environmental</a></li>
            </ul>
          </div>
        </div>
      </div>
    
    <Footer/>
    </div>
  )
}
