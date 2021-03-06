import React, { useState } from "react";
import './App.css';

// components
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  const [sticky, setSticky] = useState(false);

  
  window.addEventListener('scroll', (event) => {
    if(window.scrollY > window.innerHeight - 1){
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
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
