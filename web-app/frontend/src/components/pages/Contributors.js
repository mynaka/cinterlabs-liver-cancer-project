import React from 'react'
import "../pages/styles/Contribute.css"
const Contributors = (props) => {
  return (
    <div className='body-light'>
         <div class="column">
            <div class="card">
            <img src={props.image} alt = 'img' className='contributors'></img>
            <div class="container">
                <h2>{props.name}</h2>
                <p class="title">{props.desig}r</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        ``</div>
    </div>
  )
}

export default Contributors