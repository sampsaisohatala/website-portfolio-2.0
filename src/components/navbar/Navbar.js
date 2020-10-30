
import React, { useState } from "react";
import { MenuItems } from './MenuItems'
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar(props) {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  return(
    <nav className={props.sticky ? "navbar-items sticky" : "navbar-items"}>
      <div className="menu-icon" onClick={handleClick}>
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return(
            <li key={index}>
              <Link className={item.cName} to={item.url} smooth={true} duration={1000}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  ) 
}

export default Navbar;