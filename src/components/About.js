import React, { createRef } from "react";
import './About.css';

function About(props) {

  //const aboutSection = createRef(props.ref);

  return(
    <div className={props.sticky ? "about top-margin" : "about"}>
        <h1>About</h1>
        <div className="about-sections">
            <div className="introduction">
                <h3>Who is the this guy?</h3>
                <img className="" src="https://unsplash.it/1000/1000"></img>
                <p>
                I´m software developer living in Oulu, Finland. <br/> 
                I´m creative creator of unusual solutions. <br/> 
                Looking for challenges and new opportunities.
                </p>       
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li><span>Javascript</span></li>
                  <li><span>React</span></li>
                  <li><span>C#</span></li>
                  <li><span>PHP</span></li>
                  <li><span>Node.js</span></li>
                  <li><span>Unity</span></li>
                  <li><span>SQL</span></li>
                </ul>
            </div>
        </div>
    </div>

  ) 
}

export default About;