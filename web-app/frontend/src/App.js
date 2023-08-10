import React from 'react';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contribute from './components/pages/Contribute';
import About from './components/pages/About';
import Login from './components/pages/Login';
import News from './components/pages/News';
import CancerHome from './components/pages/CancerHome';
import AboutLiver from './components/pages/AboutLiver';
import { NewsArticle } from './components/pages/NewsArticle';
import Data from './components/pages/Data';
import CancerResearch from './components/pages/CancerResearch';
import { Research } from './components/pages/Research';


function App() {
  return (
    <Router>
      <>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/article' element={<NewsArticle />} />
          <Route path='/about' element={<About />} />
          <Route exact path = "/login" element ={<Login />} />
          <Route path='/contribute' element={<Contribute />} />
          <Route path='/cancerhome' element={<CancerHome />} />
          <Route path='/aboutliver' element={<AboutLiver />} />
          <Route path='/dataportal' element={<Data/>}/>
          <Route path ='/cancerresearch' element ={<CancerResearch />}/>
          <Route path ='/research' element = {<Research />}/>
          <Route path ='contribute' element ={<Contribute />}/>

        </Routes>
      </>
    </Router>
  );
}

export default App;
