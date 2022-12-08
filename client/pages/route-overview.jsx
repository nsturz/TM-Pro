import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

export default class RouteOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourDates: [],
      origin: '',
      destination: '',
      travelMode: 'DRIVING',
      response: null,
      distances: [],
      durations: [],
      containerStyle: {
        width: '500px',
        height: '450px'
      },
      center: {
        lat: 33.770050,
        lng: -118.193741
      }
    };

    this.directionsCallback = this.directionsCallback.bind(this);
  }

  componentDidMount() {
    fetch('api/shows')
      .then(res => res.json())
      .then(tourDates => this.setState({
        tourDates,
        origin: `${tourDates[0].dateCity},${tourDates[0].dateState}`,
        destination: `${tourDates[1].dateCity},${tourDates[1].dateState}`
      }));
  }

  directionsCallback(response) {
    if (response !== null) {
      if (response.status === 'OK') {
        const distances = [...this.state.distances];
        const durations = [...this.state.durations];
        distances.push(response.routes[0].legs[0].distance.text);
        durations.push(response.routes[0].legs[0].duration.text);
        this.setState({
          response,
          distances,
          durations
        });
      }
    }
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
                <p className="col-6">From: {this.state.origin} </p>
                <p className="col-6">To: {this.state.destination} </p>
                <p className="col-6">Distance: {this.state.distances[0]}</p>
                <p className="col-6">Duration: {this.state.durations[0]}</p>
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
              zoom={9} >
              {
                  (this.state.destination !== '' && this.state.origin !== '') &&
                  (
                  <DirectionsService
                    options={{
                      destination: this.state.destination,
                      origin: this.state.origin,
                      travelMode: this.state.travelMode
                    }}
                    callback={this.directionsCallback}
                  />
                  )
                }
              {
                  (this.state.response !== null) &&
                  (
                    <DirectionsRenderer
                      options={{ directions: this.state.response }} />
                  )
                }
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  }
}
