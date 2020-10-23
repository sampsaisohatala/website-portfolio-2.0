import React from "react";
import './Work.css';

function Work(props) {
  return (
    <div key={props.index} className="work-items">
        <img src="https://unsplash.it/1000/500"></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>
            For more information
        </button>
        
    </div>
  );
}

export default Work;