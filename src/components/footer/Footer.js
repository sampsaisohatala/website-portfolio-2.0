import React from "react";
import './Footer.css';
import { animateScroll as scroll} from 'react-scroll';

function Footer(props) {
  return (
    <footer className="footer">
        
        <button onClick={() => scroll.scrollToTop()}><i className="fas fa-angle-double-up"></i></button> 
        <span>&copy; Sampsa Isohätälä 2020</span>
    </footer>
  );
}

export default Footer;