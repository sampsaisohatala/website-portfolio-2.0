
import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <header className="header_container">
      <span className="app_name">Sampsa Isohätälä</span>

      <ul>
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
    </header>
  );
}

export default Navbar;