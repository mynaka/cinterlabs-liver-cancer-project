import '../../App.css';
import React, { useEffect, useState } from 'react';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import './styles/Home.css'; // Import the Home.css file
import Navbar from '../Navbar';
import NewsCards from './NewsCards';

function Home() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/news")
      .then(res => { return res.json() })
      .then(resData => {
        console.log(resData);
        return resData;
      })
      .then(news => { setNewsData(news) })
      .catch(err => console.log(err));
  }, []);

  const firstNewsCard = newsData.length > 0 ? newsData[0] : null;

  return (
    <div>
      <Navbar />
      <div className='home-container'>
        <div className='spaced'></div>
        <HeroSection />
        <h1 className='recentUpdates'>Recent Updates</h1>
        {firstNewsCard && (
          <NewsCards
            useHomeStyles={true}
            id={firstNewsCard._id}
            photo={firstNewsCard.photo}
            title={firstNewsCard.title}
            tags={firstNewsCard.tags}
            author={firstNewsCard.author}
            content={firstNewsCard.content}
            date={firstNewsCard.date_add}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
