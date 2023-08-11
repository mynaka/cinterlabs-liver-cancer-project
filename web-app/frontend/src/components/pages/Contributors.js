import React from 'react'
import "../pages/styles/Contribute.css"

//style ref: //ref: https://github.com/asif0305/Reactjs-API-Project/blob/main/src/Components/App.css
const Contributors = (props) => {
  
  return (
    <div className="card_item" key={props.key}>
        <div className="card_inner">
            <img src={props.image} alt="" />
            <div className="userName">{props.name}</div>
            <div className="userUrl">{props.desig}</div>
            <div className="detail-box">

                <div className="gitDetail"><span>Researches</span>23</div>
                <div className="gitDetail"><span>Reviews</span>45</div>
                <div className="gitDetail"><span>Articles</span>11</div>
            </div>
            <button className="seeMore">See More</button>
        </div>

    </div>  
  )
}

export default Contributors