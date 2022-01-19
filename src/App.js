import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;