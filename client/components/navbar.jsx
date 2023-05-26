import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">Tour Manager Pro</a>
          <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#instructions">Instructions</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
