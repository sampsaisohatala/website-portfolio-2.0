import React, { useState, useEffect }  from "react";
import LazyHero from 'react-lazy-hero';
import './Hero.css';
import background from '../images/bg-space.jpg'

import Zoom from 'react-reveal/Zoom';

function Hero() {
  
    const height = useWindowSize();

    return (
      <div className="hero-container">
          <LazyHero 
          className="hero"
          imageSrc="https://unsplash.it/2000/1000"
          //imageSrc={background}
          minHeight= {`${height - 48}px`}
          opacity={0.3}
          color="#fff"     
          parallaxOffset={200}  
          >
          <Zoom className="hero-heading">
              <h1>Generic Startup Hype Headline</h1>
          </Zoom>         
          </LazyHero>   
        </div>
    );
  }
  
  /*
              <div className="tilted-padding">
                <h1>tests</h1>
            </div>
  
  */
  export default Hero;

  function useWindowSize() {
    const [windowHeight, setWindowHeight] = useState("");
  
    useEffect(() => {
      function handleResize() {
        setWindowHeight(window.innerHeight);
      }
      
      window.addEventListener("resize", handleResize);
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowHeight;
  }