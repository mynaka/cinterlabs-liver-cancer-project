import { useState } from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'


// const router = createBrowserRouter(
// createRoutesFromElements(
//   <Route path ="/" element = {<Navbar />}>

//     <Route exact path = "home" element ={<Home />} />
//     <Route index element ={<Login />} />
//   </Route>
// )

// )


function App() {
  const [count, setCount] = useState(0)

  return<div>
       <BrowserRouter>
        <Routes>
          <Route exact path = "/" element ={<Home />} />
          <Route exact path = "/login" element ={<Login />} />
        </Routes>
      </BrowserRouter>

  </div>

  
}

export default App
