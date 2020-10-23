
import React, {Component} from "react";
import { MenuItems } from './MenuItems'
import './Navbar.css';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <nav className="navbar-items">
        <h1 className="navbar-logo">Sampsa Isohätälä <i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
}

export default Navbar;

/*
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
*/