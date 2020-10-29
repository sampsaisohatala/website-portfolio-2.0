import React from "react";
import './Work';

function WorkCard(props) {

  // <img src={require(`../../images/${props.url}`)} alt={props.url}></img>

  return (
    <div key={props.index} className="work-items">
      <img src={process.env.PUBLIC_URL + `/images/${props.url}`}  alt={props.url} /> 
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