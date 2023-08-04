import React from 'react';
import '../../App.css';
import './News.css'; // Import the news-specific styles
import Footer from '../Footer';

const newsData = [
  {
    author: ['John Doe'],
    title: 'Lorem Ipsum Dolor Sit Amet',
    date_add: '2023-08-04T12:34:56.789Z',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam pulvinar condimentum...',
    tags: ['Lorem', 'Ipsum', 'Dolor'],
    photo: '/images2/newsph.jpg',
  },
  {
    author: ['Jane Smith'],
    title: 'Phasellus Sit Amet Rhoncus',
    date_add: '2023-08-04T12:34:56.789Z',
    content: 'Phasellus sit amet rhoncus orci. Nam id neque purus. Duis ultricies vestibulum metus...',
    tags: ['Phasellus', 'Rhoncus', 'Etiam'],
    photo: '/images2/newsph.jpg',
  },
  // Add more news articles here...
];

export default function News() {
  return (
    <>
      <div className='spacer'>
      &nbsp;
      </div>

      <div className="news-center-container">
        <div className="news-container">
          {newsData.map((newsItem, index) => (
            <div key={index} className="news-card">
              <h2>{newsItem.title}</h2>
              <p>{newsItem.content}</p>
              <ul>
                {newsItem.tags.map((tag, tagIndex) => (
                  <li key={tagIndex}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}