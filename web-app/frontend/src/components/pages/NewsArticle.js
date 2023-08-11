import React from 'react';
import '../../App.css';
import './styles/NewsArticle.css'; // Import the NewsArticle.css file
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';

export const NewsArticle = () => {
    const location = useLocation();
    const route = "/";

    return (
        <div className='body-dark'>
            <Navbar />
            <div className='headSpace'></div>
            <div className='newsArticle'>
            <div className='articleTitle'>
                    <h4>{location.state.props.title}</h4>
                </div>
                <div className='articleDate'>
                    <h6>{Date(location.state.props.date)}</h6>
                </div>
                <div className='articleImg'>
                    <img src={route.concat(location.state.props.photo)} alt='news-img' className='articleImg' />
                </div>
               

                <div className='articleContent'>
                    <p>{location.state.props.content}</p>
                </div>

                
            </div>
            <Footer />
        </div>
    );
};
