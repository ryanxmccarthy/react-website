import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/services' component={<Services />} />
          <Route path='/products' component={<Products />} />
          <Route path='/sign-up' component={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;