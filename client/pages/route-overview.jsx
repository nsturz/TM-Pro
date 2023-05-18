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
        width: '600px',
        height: '450px'
      },
      center: {
        lat: 33.770050,
        lng: -118.193741
      }
    };

    this.directionsCallback = this.directionsCallback.bind(this);
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
    // console.log('this.props.destination:', this.props.destination)
    return (
      <div className="container">
        {
          (this.props.destination === 'none')
            ? <div className="row d-flex justify-content-center">
              <div className="col">
                <h6 className="text-center d-block">No more trips. 😎</h6>
              </div>
            </div>
            : <div className="mb-3 mt-5 row d-flex flex-wrap">
              <div className="col-lg ">
                <div className="row mb-3 d-flex justify-content-start">
                  <h6 className="poppins-dark">Next Trip</h6>
                  <i className="fa-solid fa-route info-new ml-2 mt-1" />
                </div>
                <div className="row">
                  <div className="col col-12 route-info box-shadow rounded">
                    <div className="text-grey row d-dlex justify-content-center pt-3">
                      <p className="text-grey col-6">From: {this.props.origin} </p>
                      <p className="text-grey col-6">To: {this.props.destination} </p>
                      <p className="text-grey col-6">Distance: {this.state.distances[0]}</p>
                      <p className="text-grey col-6">Duration: {this.state.durations[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg  col-12 d-flex justify-content-center mt-3">
                <LoadScript
                  googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
                  <GoogleMap
                    mapContainerClassName='google-map'
                    mapContainerStyle={this.state.containerStyle}
                    center={this.state.center}
                    zoom={9} >
                    {
                      (this.state.destination !== '' && this.state.origin !== '') &&
                      (
                        <DirectionsService
                          options={{
                            destination: this.props.destination,
                            origin: this.props.origin,
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
        }
      </div>

    );
  }
}
