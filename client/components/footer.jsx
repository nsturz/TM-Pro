import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar fixed-bottom">
        <i className="nav-bottom-icon fa-solid fa-house navigation" id="dashboard" />
        <i className="nav-bottom-icon fa-solid fa-calendar-days navigation" />
        <i className="nav-bottom-icon fa-solid fa-map-location-dot navigation" />
        <i className="nav-bottom-icon fa-solid fa-clipboard-list navigation" />
      </nav>
    );
  }
}
