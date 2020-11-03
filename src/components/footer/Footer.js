import React from "react";
import './Footer.css';
import { animateScroll as scroll} from 'react-scroll';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
        <button onClick={() => scroll.scrollToTop()}><i className="fas fa-angle-double-up"></i></button> 
        <span>&copy; Sampsa Isohätälä 2020</span>
    </footer>
  );
})

export default Footer;