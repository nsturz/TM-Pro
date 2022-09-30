import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar footer fixed-bottom">
        <a href="#"><i className="nav-bottom-icon fa-solid fa-house navigation" id="dashboard" /></a>
        <i className="nav-bottom-icon fa-solid fa-calendar-days navigation" />
        <i className="nav-bottom-icon fa-solid fa-map-location-dot navigation" />
        <a href="#form"><i className="nav-bottom-icon fa-solid fa-clipboard-list navigation" /></a>
      </nav>
    );
  }
}
