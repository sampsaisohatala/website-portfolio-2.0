import React, { useState } from "react";
import './Work';

function WorkCard(props) {

  const openLink = () => {

  }

  return (
    <div key={props.index} className="work-items">
      <img className="item-image" src={process.env.PUBLIC_URL + `/images/${props.img}`}  alt={props.url} /> 
      <div className="infomask">
        <h3 className="infomask-child">
          {props.title}
        </h3>
        <p className="infomask-child">
          {props.description}
        </p>
        <a className="infomask-child" href={props.url}>
          See more
        </a>
      </div>
    </div>
  );
}

export default WorkCard;