import React from 'react';
import RouteOverview from '../components/route-overview';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      tourDates: [],
      notes: '',
      contacts: '',
      schedules: [],
      date: '',
      lastTourDate: '',
      origin: '',
      destination: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.selectDate = this.selectDate.bind(this);
  }

  componentDidMount() {
    fetch('/api/shows/1')
      .then(res => res.json())
      .then(show => {
        this.setState({ show });
      });

    fetch('/api/all-shows')
      .then(res => res.json())
      .then(tourDates => {
        this.setState({
          tourDates,
          origin: `${tourDates[0].city}, ${tourDates[0].state}`,
          destination: `${tourDates[1].city}, ${tourDates[1].state}`
        });
      });

    fetch('/api/schedules/1')
      .then(res => res.json())
      .then(schedules => {
        this.setState({ schedules });
      });
  }

  handleDateChange(event) {
    const tourDates = this.state.tourDates;
    this.setState({
      date: event.target.value,
      lastTourDate: tourDates.length - 1
    });

  }

  selectDate(event) {
    event.preventDefault();
    const tourDates = this.state.tourDates;
    const date = this.state.date;
    const lastTourDate = this.state.lastTourDate;
    tourDates.forEach((event, index) => {
      if (date === tourDates[index].date && index !== lastTourDate) {
        fetch(`/api/shows/${tourDates[index].showId}`)
          .then(response => response.json())
          .then(show => {
            this.setState({
              show,
              origin: `${tourDates[index].city}, ${tourDates[index].state}`,
              destination: `${tourDates[index + 1].city}, ${tourDates[index + 1].state}`
            });
          });
        fetch(`/api/schedules/${tourDates[index].showId}`)
          .then(response => response.json())
          .then(schedules => {
            this.setState({
              schedules
            });
          });
      } else if (date === tourDates[index].date) {
        fetch(`/api/shows/${tourDates[index].showId}`)
          .then(response => response.json())
          .then(show => {
            this.setState({
              show,
              origin: 'none',
              destination: 'none'
            });
          });
        fetch(`/api/schedules/${tourDates[index].showId}`)
          .then(response => response.json())
          .then(schedules => {
            this.setState({
              schedules
            });
          });
      }
    });
    document.getElementById('search-date-form').reset();
  }

  render() {
    return (
      <div className="DELETE container" >
        <form onSubmit={this.selectDate} className="d-flex mt-3" id="search-date-form" >
          <div className="col-lg-10 col-8 p-0 m-1">
            <select onChange={this.handleDateChange} name="" className="form-control" id="select-deez">
              <option>Select a date.</option>
              {
                  this.state.tourDates.map(event => {
                    return (
                      <option key={event.showId} id={event.showId}>{event.date}</option>
                    );
                  })
                }
            </select>
          </div>
          <div className="col-lg-2 p-0 m-1">
            <button type="submit" className="btn select-date-btn"> Select Date</button>
          </div>
        </form>
        <div className="tourDate" key={this.state.show.showId} id={this.state.show.showId}>
          <div className="row mt-4">
            <div className="col-lg-5 p-0">
              <hr className="hr-new" />
            </div>
            <div className="col-lg-2 m-0 p-0 text-center">
              <h6 className="poppins-dark m-0 d-inline m-1 ">{this.state.show.date}</h6>
              <i className="fa-solid fa-calendar-days d-inline m-1 info-new" />
            </div>
            <div className="col-lg-5 p-0">
              <hr className="hr-new" />
            </div>
          </div>
          <div className="details-container d-flex flex-wrap justify-content-center mt-3 mb-5">
            <div className="col-12 col-lg venues-new ml-2 mr-2">
              <div className="row">
                <h6 className="poppins-dark d-inline">Venue</h6>
                <i className="fa-solid fa-location-dot d-inline m-1 info-new" />
              </div>
              <div className="row">
                <div className="col pl-2 pr-2 pb-3 pt-3 box-shadow rounded overflow-y venue-details-new">
                  <div>
                    <p className="lato-dark m-0 ">{this.state.show.venueName}</p>
                    <p className="lato-dark m-0"> {this.state.show.line1}</p>
                    <p className="lato-dark m-0">{this.state.show.city}, {this.state.show.state}</p>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <img src="../images/google-map-image.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg details-new ml-2 mr-2">
              <div className="row">
                <h6 className="poppins-dark d-inline ">Details</h6>
                <i className="fa-solid fa-clipboard-list d-inline m-1 info-new" />
              </div>
              <div className="row">
                <div className="col box-shadow rounded pt-3 pl-2 pr-2 notes-contacts-new">
                  <div className="row">
                    <div className="col">
                      <p className="lato-dark">{this.state.show.contactName}</p>
                      <p className="lato-dark">{this.state.show.contactPhone}</p>
                      <p className="lato-dark">t{this.state.show.contactEmail}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="lato-dark">{this.state.show.notesDetails}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg schedule-new ml-2 mr-2 ">
              <div className="row d-flex">
                <h6 className="poppins-dark d-inline ">Schedule</h6>
                <i className="fa-solid fa-clock d-inline m-1 info-new" />
              </div>
              <div className="row">
                <div className="col box-shadow rounded schedule-details-new">
                  <ul>
                    {
                        this.state.schedules?.map(event => {
                          return (
                            <li key={event.scheduleId} >{event.startTime} - {event.endTime} : {event.details}</li>
                          );
                        })
                       }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RouteOverview tourDates={this.state.tourDates} origin={this.state.origin} destination={this.state.destination}/>
      </div >
    );
  }
}
