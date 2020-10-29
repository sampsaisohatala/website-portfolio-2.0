import React from "react";
import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
        
        <button onClick={props.scrollToTop}><i className="fas fa-angle-double-up"></i></button> 
        <span>&copy; Sampsa Isohätälä 2020</span>
    </footer>
  );
}

export default Footer;