import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import '../pages/styles/Research.css'
import Footer from '../Footer'

const Research = () => {
    const [researchData, setResearchData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/research")
          .then(res => {return res.json()})
          .then(resData => {
            console.log(resData)
            return resData
          })
          .then(news => {setResearchData(news)})
          .catch(err => console.log(err))
  }, []);
    
  return (
    <div className='body-light'>
        <Navbar />
        <div className='spacer'> &nbsp; </div>

        <Footer />
    </div>
  )
}

export default Research