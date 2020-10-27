import React, { useState } from "react";
import './App.css';

// components
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
//React scroll-into-view

function App() {

  const [sticky, setSticky] = useState(false);

  window.addEventListener('scroll', (event) => {
    if(window.scrollY > window.innerHeight){
      if(sticky)
        return;
      setSticky(true);
    }
    else{
      if(!sticky)
        return;
      setSticky(false);
    }
  });

  return (
    <div className="App">
      <Hero/>
      <Navbar sticky={sticky}/>
      <About sticky={sticky}/>
      <Work/>
    </div>
  );
}

export default App;
