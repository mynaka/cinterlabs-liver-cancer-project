import React from 'react'
import './NewsCards.css'
import {useNavigate} from 'react-router-dom';

export default function NewsCards(props){
    const navigate = useNavigate();

    const redirect = () => {
      navigate('/news/article',{state:{props:props}})  
    }
    return(
        <div className='newsList' onClick={()=>redirect()}>
            <div key ={props.index} className='newsCard'>
                <img src = {props.photo} alt='news-img' className='newsImg'></img>

                <div className='newsCardContent'>
                    <h3 className='newsTitle'>{props.title}</h3>
                    <div className='stack'>
                        <div className='newsAuthor'>{props.author}</div>
                    </div>
                    <div className='tagsStack'>
                        <div className='newsTags'>{props.tags.map((tag,ind) =>(
                            <div key={ind} className='tagItem'>
                                <ul className='tag'><li className='tags'>{tag}</li></ul>
                            </div>
                        ))}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}