import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import './styles/NewsCards.css'
import { useLocation } from 'react-router-dom';

export const NewsArticle = () => {

    const location = useLocation();
    const route = "/";
  return (
    <div>
        <div className='headSpace'></div>
        <div className='newsArticle'>
            <div className='articleImg'>
                <img src={route.concat(location.state.props.photo)} alt='news-img' className='articleImg' ></img>
            </div>
            <div className ='articleTitle'>
                <h1>{location.state.props.title}</h1>
            </div>

            <div className='articleContent'>
                <p>{location.state.props.content}</p>
            </div>
            
            <div className='articleDate'>
                <h6>{Date(location.state.props.date)}</h6>
            </div>

        </div>
        <Footer/>
    </div>
  )
}
