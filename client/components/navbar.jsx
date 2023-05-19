import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand ml-5" href="#">TOUR MANAGER PRO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link font-weight-bold">DASHBOARD<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a href="#calendar" className="nav-link font-weight-bold">DATES</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle font-weight-bold" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  MORE
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#new-date">NEW DATE</a>
                  <a className="dropdown-item" href="#edit-date">EDIT DATE</a>
                  <a className="dropdown-item" href="#new-artist-form">NEW ARTIST</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
