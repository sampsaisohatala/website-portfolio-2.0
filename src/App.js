import React, { useState, useEffect } from "react";
import LazyHero from 'react-lazy-hero';
import './App.css';

// components
import Navbar from './components/Navbar'
//React scroll-into-view

function App() {
  const size = useWindowSize();
  console.log(size.height);
  
  return (
    <div className="App">
      <Navbar/>
      <LazyHero 
        className="hero"
        imageSrc="https://unsplash.it/2000/1000"
        //minHeight="100vh"
        minHeight= {`${size.height - 48}px`}
        opacity={0.4}
        color="#fff"     
        parallaxOffset={700}  
        >
          <div className="hero-heading">
            <h1>Generic Startup Hype Headline</h1>
          </div>
          
      </LazyHero>   
    </div>
  );
}

export default App;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
