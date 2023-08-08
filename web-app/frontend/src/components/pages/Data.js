import React, {useEffect,useState}from 'react'
import '../pages/styles/Data.css'
import CancerHomeNavbar from '../CancerHomeNavbar'
import DataDictionary from './DataDictionary';

export default function Data(){

  const [dataDictionaries, setDataDictionary] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(res => {return res.json()})
      .then(resData => {
        console.log(resData)
        return resData
      })
      .then(data => {setDataDictionary(data)})
      .catch(err => console.log(err))
}, []);


  return (
    <div>
      <CancerHomeNavbar />
      
      <div className='spacer'> &nbsp;</div>
      <h1 className='accordion'>Data Dictionary</h1>
      <div className='dataAccordion'>
        {dataDictionaries.map((data,index) =>(
          <DataDictionary 
          key={index}
          title={data.title}
          subcateg={data.subcategory}/>
        ))}
      </div>
    </div>
  )
}
