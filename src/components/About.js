import React from "react";
import './About.css';

function About(props) {

  return(
    <div className={props.sticky ? "about top-margin" : "about"}>
        <h1>About</h1>
        <div className="about-sections">
            <div className="introduction">
                <h3>Who is the this guy?</h3>
                <img className="" src="https://unsplash.it/1000/1000"></img>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                </p>       
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li><span>Javascript</span></li>
                  <li><span>Javascript</span></li>
                  <li><span>Javascript</span></li>
                  <li><span>Javascript</span></li>
                  <li><span>Javascript</span></li>
                  <li><span>Javascript</span></li>
                  <li><span>Javascript</span></li>
                </ul>
            </div>
        </div>
    </div>

  ) 
}

export default About;