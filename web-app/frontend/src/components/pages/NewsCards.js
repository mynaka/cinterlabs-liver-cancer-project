import React from 'react';
import './styles/NewsCards.css';
import './styles/NewsCardsHome.css';
import { useNavigate } from 'react-router-dom';

export default function NewsCards(props) {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/news/article', { state: { props: props } });
    };

    const useHomeStyles = props.useHomeStyles || false;

    return (
        <div className={`newsList ${useHomeStyles ? 'newsListHome' : ''}`} onClick={() => redirect()}>
            <div key={props.index} className={`newsCard ${useHomeStyles ? 'newsCardsHome' : ''}`}>
                <img src={props.photo} alt='news-img' className={`newsImg ${useHomeStyles ? 'newsImgHome' : ''}`} />

                <div className={`newsCardContent ${useHomeStyles ? 'newsCardContentHome' : ''}`}>
                    <h3 className={`newsTitle ${useHomeStyles ? 'newsTitleHome' : ''}`}>{props.title}</h3>
                    <div className={`stack ${useHomeStyles ? 'stackHome' : ''}`}>
                        <div className={`newsAuthor ${useHomeStyles ? 'newsAuthorHome' : ''}`}>{props.author}</div>
                    </div>
                    <div className={`tagsStack ${useHomeStyles ? 'tagsStackHome' : ''}`}>
                        <div className={`newsTags ${useHomeStyles ? 'newsTagsHome' : ''}`}>
                            {props.tags.map((tag, ind) => (
                                <div key={ind} className={`tagItem ${useHomeStyles ? 'tagItemHome' : ''}`}>
                                    <ul className={`tag ${useHomeStyles ? 'tagHome' : ''}`}>
                                        <li className={`tags ${useHomeStyles ? 'tagsHome' : ''}`}>{tag}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
