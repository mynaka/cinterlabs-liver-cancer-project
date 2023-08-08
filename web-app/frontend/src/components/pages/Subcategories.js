import React, {useState, useEffect} from 'react'
import Properties from './Properties'
import '../pages/styles/Data.css'

const Subcategories = (props) => {
    const [properties, setProperties] = useState([])
    const fetchAdd = 'http://localhost:3001/' + props.categ +'/' +props.sub + '/property'
    const [isActive, activate] = useState(false)
    
    //get properties per sub category
    useEffect(() => {
      fetch(fetchAdd)
        .then(res => {return res.json()})
        .then(resData => {
          console.log(resData)
          return resData
        })
        .then(data => {setProperties(data)})
        .catch(err => console.log(err))
  }, []);


  return (
    <div className="accordion-sub">
        <div className="accordion-item">
          <div className="accordion-title-sub" onClick={()=>activate(!isActive)}>
            <div>{props.sub}</div>
            <div>{isActive? '-' : '+'}</div>
          </div>
          <div className='space'></div>
          {isActive && <div className="accordion-content">
            <table>
            <div className='headSpace'></div>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
                
                <div className='headSpace'></div>

                        {properties.map((property, ind) =>
                        (<Properties
                        key ={ind}
                        categ= {property.categ}
                        subcateg ={property.subcategory}
                        property ={property.property}
                        type ={property.type}
                        required ={property.required}
                        desc ={property.description} />
                        ))}
            </table>
            
          
          </div> }
        </div>
      </div>
  )
}

export default Subcategories