import React from "react";
import './Hero.css';
import Particles from 'react-particles-js';
import { Link } from 'react-scroll';

const params = {
  "particles": {
    "links": {
      color: "#ffffff",
      distance: 170,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    "number": {
      "value": 180
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


function Hero() {
  return (
    <div id="home" className="hero">
      <Particles className="particles" params={params}/>
      <div>
        <h1>Hello! I´m <span style={{color: "#d63200"}}>Sampsa Isohätälä</span><br/> Web and game developer.</h1>
        <Link to={'work'} smooth={true} duration={1000}>
        <button>
          View my work
          <i className="fas fa-arrow-right"></i>
        </button>
        </Link>
      </div>

    </div>
  );
}

export default Hero;

