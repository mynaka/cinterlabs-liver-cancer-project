import React from 'react'
import './NewsCards.css'

export default function NewsCards(props){
    return(
        <div className='newsList' onClick={() => alert("Redirecting to news article")}>
            <div key ={props.index} className='newsCard'>
                <img src = 'images2/news_stock.jpg' alt='news-img' className='newsImg'></img>

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