import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contribute from './components/pages/Contribute';
import About from './components/pages/About';
import Login from './components/pages/Login';
import News from './components/pages/News';
import CancerHome from './components/pages/CancerHome';
import CancerHomeNavbar from './components/CancerHomeNavbar';
import AboutLiver from './components/pages/AboutLiver';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route exact path = "/login" element ={<Login />} />
          <Route path='/contribute' element={<Contribute />} />
          <Route path='/cancerhome' element={<CancerHome />} />
          <Route path='/aboutliver' element={<AboutLiver />} />
          
        </Routes>
      </>
    </Router>
  );
}

export default App;
