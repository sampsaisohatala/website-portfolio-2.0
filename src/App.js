import React from "react";
import './App.css';

// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
//React scroll-into-view

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Work id="work"/>
    </div>
  );
}

export default App;
