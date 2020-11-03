import React from "react";
import './Contact.css';
import Fade from 'react-reveal/Fade';


function Contact() {
  return (
    <div id="contact" className="contact_container">    
        <div className="content_section">
            <Fade right big>
                <div className="text_div">
                    <h1>Contact info</h1>
                    <p><span style={{fontWeight: 800, color:"#d63200"}}>Don't be a stranger </span> just say hello. </p>
                </div>
            </Fade>
            <Fade>
                <IconRow/>
            </Fade>
        </div>   
    </div>
  );
}

export default React.memo(Contact);

function IconRow(){
    return(
        <div className="icon_row">
            <a className="contact_link" href="https://www.linkedin.com/in/sampsa-isoh%C3%A4t%C3%A4l%C3%A4-aa184b158/">
            <img className="icon" src={process.env.PUBLIC_URL + `/images/linkedin.png`} alt="Contact me"/>
                <h4>LinkedIn</h4>
            </a>
            <a className="contact_link" href="https://github.com/sampsaisohatala">
            <img className="icon" src={process.env.PUBLIC_URL + `/images/github.png`} alt="Contact me"/>
                <h4>GitHub</h4>
            </a>
            <a className="contact_link" href="https://www.instagram.com/samppsssa/?hl=fi">
            <img className="icon" src={process.env.PUBLIC_URL + `/images/instagram.png`} alt="Contact me"/>
                <h4>Instagram</h4>
            </a>
            <a className="contact_link" href="mailto:sampsa.isohatala@gmail.com">
            <img className="icon" src={process.env.PUBLIC_URL + `/images/email.png`} alt="Contact me"/>
                <h4>Email</h4>
            </a> 
        </div>
    )   
}