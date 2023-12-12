import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  handleLinkClick = () => {
    closeNav(); // Close the navigation overlay when a link is clicked
  };

  render() {
    return (
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link to="/" className="navbar-brand">
              <span>UXOS</span>
            </Link>

            <div className="navbar-collapse" id="">
              <div className="custom_menu-btn">
                <button onClick={openNav}>
                  <span className="s-1"> </span>
                  <span className="s-2"> </span>
                  <span className="s-3"> </span>
                </button>
              </div>
              <div id="myNav" className="overlay">
                <div className="overlay-content">
                  <Link to="/" onClick={this.handleLinkClick}>
                    HOME
                  </Link>
                  <Link to="/about" onClick={this.handleLinkClick}>
                    ABOUT
                  </Link>
                  <Link to="/feature" onClick={this.handleLinkClick}>
                    FEATURE
                  </Link>
                  <Link to="/contact" onClick={this.handleLinkClick}>
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document
    .querySelector(".custom_menu-btn")
    .classList.toggle("menu_btn-style");
}

function closeNav() {
  document.getElementById("myNav").classList.remove("menu_width");
  document
    .querySelector(".custom_menu-btn")
    .classList.remove("menu_btn-style");
}
