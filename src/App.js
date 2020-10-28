import React, { useRef, useState } from "react";
import './App.css';

// components
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
//React scroll-into-view

function App() {

  const [sticky, setSticky] = useState(false);
  const aboutSection = useRef(null);

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
  const scrollToAbout = () => console.log(aboutSection);//window.scrollTo({ top: aboutSection.current.offsetTop, behavior: "smooth" })

  return (
    <div className="App">
      <Hero scrollToAbout={scrollToAbout}/>
      <Navbar sticky={sticky}/>
      <About ref={aboutSection} sticky={sticky}/>
      <Work/>
      <Contact/>
      <Footer scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
