import React from "react";
import './About.css';
import Fade from 'react-reveal/Fade';

function About(props) {

  return(
    <div id="about" className={props.sticky ? "about top-margin" : "about"}>
      <Fade right big>
        <h1>ABOUT</h1>
      </Fade>
      
      <div className="about-sections">
      <Fade>
        <div className="introduction">
          <img className="" src={process.env.PUBLIC_URL + `/images/sampsa.jpeg`} alt="profile"></img>
    
        </div>
      </Fade>
      <Fade>
        <div>
        <p>
          Software developer living in Oulu, Finland. <br/> 
          Creative creator of unusual solutions. <br/> 
          Looking for challenges and new opportunities.
          </p>   
        </div>
      </Fade>
          
      </div>
    </div>

  ) 
}

export default About;