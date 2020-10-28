import React from "react";
import './Hero.css';

import Particles from 'react-particles-js';
/*
import background from '../images/bg-space.jpg'
import Zoom from 'react-reveal/Zoom';
import LazyHero from 'react-lazy-hero';
*/

const paramsDesktop = {
  "particles": {
    "links": {
      color: "#ffffff",
      distance: 170,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    "number": {
      "value": 200
    },
    "size": {
      "value": 1.5
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}

function Hero(props) {
  return (
    <div className="hero">
      <Particles className="particles" params={paramsDesktop}/>
      <div>
        <h1>Hello! I´m <span style={{color: "#d63200"}}>Sampsa Isohätälä</span><br/> Web and game developer.</h1>
        <button onClick={props.scrollToAbout}>
          View my work
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

    </div>
  );
}

export default Hero;

