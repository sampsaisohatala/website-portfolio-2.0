import React, { useState } from "react";
import './App.css';

// components
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});

  return (
    <div className="App">
      <Hero/>
      <Navbar sticky={sticky}/>
      <About sticky={sticky}/>
      <Work/>
      <Contact/>
      <Footer scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
