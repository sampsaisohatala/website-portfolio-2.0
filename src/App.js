import React, { useState, useEffect } from "react";
import LazyHero from 'react-lazy-hero';
import './App.css';

// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
//React scroll-into-view

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/> 
    </div>
  );
}

export default App;
