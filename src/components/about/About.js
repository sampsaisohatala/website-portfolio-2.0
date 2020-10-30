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
          <h3>Who is the this guy?</h3>
          <img className="" src={process.env.PUBLIC_URL + `/images/sampsa.jpeg`} alt="profile"></img>
          <p>
          Software developer living in Oulu, Finland. <br/> 
          Creative creator of unusual solutions. <br/> 
          Looking for challenges and new opportunities.
          </p>       
        </div>
      </Fade>
      <Fade>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li key="1"><span>Javascript</span></li>
            <li key="2"><span>React</span></li>
            <li key="3"><span>C#</span></li>
            <li key="4"><span>PHP</span></li>
            <li key="5"><span>Node.js</span></li>
            <li key="6"><span>Unity</span></li>
            <li key="7"><span>Angular</span></li>
            <li key="8"><span>SQL</span></li>
          </ul>
        </div>
      </Fade>
          
      </div>
    </div>

  ) 
}

export default About;