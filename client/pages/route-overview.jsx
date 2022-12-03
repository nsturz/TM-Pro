import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default class RouteOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      duration: '',
      travelMode: '',
      directionsResponse: null,
      showsLeft: null,
      containerStyle: {
        width: '400px',
        height: '400px'
      },
      center: {
        lat: -3.745,
        lng: -38.523
      }
    };
  }

  render() {
    return (
      <div className="container">
        <h1>MAP HAHAHA</h1>
        <LoadScript>
          <GoogleMap
          mapContainerStyle={this.state.containerStyle}
          center={this.state.center}
          zoom={5} />
        </LoadScript>
      </div>
    );
  }
}
