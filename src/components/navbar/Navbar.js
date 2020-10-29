
import React, { useState } from "react";
import { MenuItems } from './MenuItems'
import './Navbar.css';

function Navbar(props) {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    //this.setState({ clicked: !state.clicked})
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
              <a className={item.cName} href={item.url} >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  ) 
}

export default Navbar;