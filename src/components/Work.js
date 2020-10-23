
import React from "react";
import './Work.css';
import Fade from 'react-reveal/Fade';

import {WorkItems} from './WorkItems'
import WorkCard from './WorkCard'

function Work() {
  return (
    
    <div className="work">
      <Fade top big>
        <h2 className="heading">Work</h2>
      </Fade>
      <div className="work-container">
        {WorkItems.map((item, index) => {
              return(
                <Fade bottom big>
                  <WorkCard key={index} title={item.title} description={item.description}/>
                </Fade>
              )
            })}
      </div>
    </div>
  );
}

export default Work;