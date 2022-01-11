import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </React.Fragment>
      
  );
}

export default App;
