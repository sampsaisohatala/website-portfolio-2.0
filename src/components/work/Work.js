
import React from "react";
import './Work.css';
import Fade from 'react-reveal/Fade';

import {WorkItems} from './WorkItems'
import WorkCard from './WorkCard'

function Work() {
  return (
    
    <div id="work" className="work">
      <Fade right big>
        <h2 className="heading">WORK</h2>
      </Fade>
      <div className="work-container">
        {WorkItems.map((item, index) => {
              return(
                <Fade key={index}>
                  <WorkCard key={index} title={item.title} url={item.url} description={item.description}/>
                </Fade>
              )
            })}
      </div>
    </div>
  );
}

export default Work;