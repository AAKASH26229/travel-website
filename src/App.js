/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
     <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/services' Component={Services} />
      <Route path='/products' Component={Products} />
      <Route path='/sign-up' Component={Signup} />

      </Routes> 

    </Router>
    
    </>
  
  );
}

export default App;
