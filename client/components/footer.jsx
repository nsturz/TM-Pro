import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar footer fixed-bottom">
        <a href="#" ><i className="nav-bottom-icon fa-solid fa-house navigation" id="dashboard" /></a>
        <a href="#calendar" ><i className="nav-bottom-icon fa-solid fa-calendar-days navigation" /></a>
        <a href="#route-overview" ><i className="nav-bottom-icon fa-solid fa-map-location-dot navigation" /></a>
        <a href="#clipboard" ><i className="nav-bottom-icon fa-solid fa-clipboard-list navigation" /></a>
      </nav>
    );
  }
}
