import React from "react";
import './Work.css';

function WorkCard(props) {
  return (
    <div key={props.index} className="work-items">
      <img src={require(`../../images/${props.url}`)} alt={props.url}></img>
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

export default WorkCard;