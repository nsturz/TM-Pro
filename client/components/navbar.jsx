import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand ml-5" href="#">TOUR MANAGER PRO</a>
          <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#instructions">INSTRUCTIONS</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
