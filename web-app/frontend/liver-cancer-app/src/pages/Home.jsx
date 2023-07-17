import React  from 'react'

const Home = () => {
  return (
    <div> 
      <h1>WELCOME!</h1>
      <button  onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:5173/login';
      }}>Login</button> 
      <button>Signup</button>
    
    </div>
  )
}

export default Home