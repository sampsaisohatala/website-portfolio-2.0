import React, { useState, useEffect }  from "react";
import LazyHero from 'react-lazy-hero';
import './Hero.css';

function Hero() {
    const size = useWindowSize();

    return (
        <LazyHero 
        className="hero"
        imageSrc="https://unsplash.it/2000/1000"
        minHeight= {`${size.height - 48}px`}
        opacity={0.4}
        color="#fff"     
        parallaxOffset={700}  
        >
          <div className="hero-heading">
            <h1>Generic Startup Hype Headline</h1>
          </div>         
        </LazyHero>   
    );
  }
  
  export default Hero;

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowSize;
  }