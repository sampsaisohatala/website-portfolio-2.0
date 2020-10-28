import React from "react";
import './Footer.css';
import Fade from 'react-reveal/Fade';

function Footer(props) {
  return (
    <footer className="footer">
        
        <button onClick={props.scrollToTop}><i class="fas fa-angle-double-up"></i></button> 
        <span>&copy; Sampsa Isohätälä 2020</span>
    </footer>
  );
}

export default Footer;