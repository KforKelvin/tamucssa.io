import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCab} from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    
    <>
    <Router>
    <h1>
        <Navbar />
        <Routes>
          <Route path='/' exact components={Home}/>
        </Routes>
        {/* <FontAwesomeIcon icon={faCab}></FontAwesomeIcon> */}
      </h1>
    </Router>
   
     
    </>
      
    
  );
}

export default App;
