import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Gacha from './Gacha.js';
import GachaCss from './Gacha.css';
import Modal from './components/Modal.js';
import Modalcss from './components/Modal.css';


function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
     </Routes>
     <Gacha/>
    </Router>
    </>
    
   

  );
}

export default App;
