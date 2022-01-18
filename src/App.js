import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
      </Router>
    </>
      
  );
}

export default App;
