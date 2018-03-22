import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="http://geekyants.com" className="navbar-brand">
              <img className="logo-light" src="https://geekyants.com/images/logo-icon-lg.png" alt="GeekyAnts logo" style={{height: '100%'}} />
              <img className="logo-dark" src="https://geekyants.com/images/logo-icon-lg.png" alt="GeekyAnts logo" style={{height: '100%'}} />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#intro" data-scroll>Home</a>
              </li>
              <li>
                <a href="#features-1" data-scroll>Features</a>
              </li>
              <li>
                <a href="#screenshots" data-scroll>Screenshots</a>
              </li>
              <li>
                <a href="#pricing" data-scroll>Pricing</a>
              </li>
              <li>
                <a href="#download" data-scroll>Demo</a>
              </li>
              <li>
                <a href="#contact" data-scroll>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
