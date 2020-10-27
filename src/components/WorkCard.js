import React from "react";
import './Work.css';

function Work(props) {
  return (
    <div key={props.index} className="work-items">
      <img src={require(`../images/${props.url}`)}></img>
      <div className="infomask">
        <h3 className="infomask-child">
          {props.title}
        </h3>
        <button className="infomask-child">
          Learn more
        </button>
      </div>
      
        
    </div>
  );
}

export default Work;