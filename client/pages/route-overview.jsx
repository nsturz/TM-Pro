// dont forget these: Marker, DirectionsRenderer, useJsApiLoader

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
        width: '500px',
        height: '450px'
      },
      center: {
        lat: 33.770050,
        lng: -118.193741
      }
    };
  }

  render() {

    return (
      <div className="container route-overview-container row col-12">
        <div className="col-lg-6">
          <div className="row mb-3 d-flex justify-content-center">
            <h2>ROUTE OVERVIEW</h2>
          </div>
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10 border border-white">
              <div className="row mt-3 ml-2">
                <h6>SHOWS LEFT</h6>
              </div>
              <div className="row d-flex justify-content-center">
                <hr className="w-100" />
                <h6 className="m-4">{this.props.tourDates.length}</h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 border border-white">
              <div className="row mt-3 ml-2">
                <h6>NEXT TRIP</h6>
              </div>
              <div className="row d-dlex justify-content-center">
                <hr className="w-100" />
                <h6 className="m-4">676 MILES</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center map-container">
          <LoadScript
          googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={this.state.containerStyle}
              center={this.state.center}
              zoom={9} />
          </LoadScript>
        </div>
      </div>
    );
  }
}
