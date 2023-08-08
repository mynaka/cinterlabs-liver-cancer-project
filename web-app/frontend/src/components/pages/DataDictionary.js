import React from 'react'
import '../pages/styles/Data.css'
import { useState } from 'react'
import Subcategories from './Subcategories'


const DataDictionary = (props) => {

  const [isActive, activate] = useState(false)
  return (
    <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={()=>activate(!isActive)}>
            <div>{props.title}</div>
            <div>{isActive? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content">{props.subcateg.map((subcateg, ind) =>
          (<Subcategories
            key ={ind}
            sub = {subcateg.title}
            categ ={props.title} />
          ))}</div> }
        </div>
      </div>
  )
}

export default DataDictionary