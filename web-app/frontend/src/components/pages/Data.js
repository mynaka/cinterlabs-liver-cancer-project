import React, {useEffect,useState}from 'react'
import '../pages/styles/Data.css'

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
      <div classame ='spacer'>

      </div>

      <div className='dataDictionaries'>
        
      </div>
    </div>
  )
}
