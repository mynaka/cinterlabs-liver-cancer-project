import React, {useEffect, useState}  from 'react';
import '../../App.css';
import Footer from '../Footer';
import NewsCards from './NewsCards';
import './NewsCards.css'


export default function News() {

  const [newsData, setNewsData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/news")
          .then(res => {return res.json()})
          .then(resData => {
            console.log(resData)
            return resData
          })
          .then(news => {setNewsData(news)})
          .catch(err => console.log(err))
  }, []);

 //console.log("newsData", newsData.body)

    return (
      <div >
        <div className='spacer'>
                &nbsp;
        </div>
         <div className='NewsCards'>
        {newsData.map((newsData,index) =>(
          <NewsCards
            key ={index}
            title={newsData.title}
            tags={newsData.tags}
            author={newsData.author}/>
        ))}
       
        </div>
        <Footer/>
      </div>
    
        
    );

    

 
}