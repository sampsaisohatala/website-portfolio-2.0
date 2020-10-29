import React from "react";
import './About.css';

function About(props) {

  return(
    <div id="about" className={props.sticky ? "about top-margin" : "about"}>
        <h1>About</h1>
        <div className="about-sections">
            <div className="introduction">
                <h3>Who is the this guy?</h3>
                <img className="" src="https://unsplash.it/1000/1000" alt="profile"></img>
                <p>
                Software developer living in Oulu, Finland. <br/> 
                Creative creator of unusual solutions. <br/> 
                Looking for challenges and new opportunities.
                </p>       
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li key="1"><span>Javascript</span></li>
                  <li key="2"><span>React</span></li>
                  <li key="3"><span>C#</span></li>
                  <li key="4"><span>PHP</span></li>
                  <li key="5"><span>Node.js</span></li>
                  <li key="6"><span>Unity</span></li>
                  <li key="7"><span>SQL</span></li>
                </ul>
            </div>
        </div>
    </div>

  ) 
}

export default About;