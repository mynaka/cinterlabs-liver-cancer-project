import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Contributors from './Contributors';
import "../pages/styles/Contribute.css"

export default function Contribute() {
  //TODO: edit to fetched data later

  const contributors = [
    {name: "Yanna Hilario", imgUrl: 'images2/person.jpg', designation: "Web Developer"},
    {name: "Romijn Vergara", imgUrl: 'images2/person.jpg', designation: "Web Developer"},
    {name: "Amos  Villanueva", imgUrl: 'images2/person.jpg', designation: "Web Developer"},
    {name: "Another Person", imgUrl: 'images2/person.jpg', designation: "Sample"},
  ]

  return (
    <div class ='body-dark'>
      <Navbar />
      <div className='spacer'> &nbsp;</div>
      <div class='container'>
        {contributors.map((data,ind) =>(
          <Contributors
          key ={ind}
          name={data.name}
          image = {data.imgUrl}
          desig ={data.designation}
          />
        ))}
      </div>

      <Footer />
      
      

    </div>
  );
}
