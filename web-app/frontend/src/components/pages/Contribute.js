import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CancerHomeNavbar from '../CancerHomeNavbar';
import Contributors from './Contributors';
import "../pages/styles/Contribute.css"

export default function Contribute() {
  //TODO: edit to fetched data later

  const contributors = [
    {name: "Yanna Hilario", imgUrl: 'images2/acres.jpg', designation: "Sample"},
    {name: "Romijn Vergara", imgUrl: 'images2/acres.jpg', designation: "Sample"},
    {name: "Amos  Villanueva", imgUrl: 'images2/acres.jpg', designation: "Sample"},
  ]


  return (
    <div className='body-light'>
      <CancerHomeNavbar />
      <div className='spacer'> &nbsp;</div>
      <div className='contributors'>
        {contributors.map((data,ind) =>(
          <Contributors
          key ={ind}
          name={data.name}
          image = {data.imgUrl}
          desig ={data.designation}
          />
        ))}
      </div>
      
      

    </div>
  );
}
