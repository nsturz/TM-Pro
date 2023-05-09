// on line 132, the app.get() method puts each schedule event into its own object, and pushes them into an array.
// we like this. We will eventually need to go through this array, and sort out schedule events according
// to showId, and in ascending order based on time.
import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourDates: [],
      notes: '',
      contacts: '',
      schedules: []
    };

  }

  componentDidMount() {
    fetch('/api/all-schedules')
      .then(res => res.json())
      .then(schedules => this.setState({ schedules }));
    fetch('/api/all-shows')
      .then(res => res.json())
      .then(tourDates => {
        this.setState({
          tourDates
        });
      });
  }

  render() {

    // console.log('this.state.tourDates:', this.state.tourDates)
    // console.log('this.state.schedules:', this.state.schedules)
    return (
      <div className="DELETE" >
        <ul className="mt-3">
          {
              this.state.tourDates.map((event, index) => {
                return (
                  <li className="tourDate container" key={event.showId} id={event.showId}>
                    <div className="row mt-5">
                      <div className="col-lg-5 p-0">
                        <hr className="hr-new" />
                      </div>
                      <div className="col-lg-2 m-0 p-0 text-center">
                        <h6 className="poppins-dark m-0 d-inline m-1 ">{event.date}</h6>
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
                              <p className="lato-dark m-0 ">{event.venueName}</p>
                              <p className="lato-dark m-0"> {event.line1}</p>
                              <p className="lato-dark m-0">{event.city}, {event.state}</p>
                              <p className="lato-dark m-0">ZIP CODE</p>
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
                                <p className="lato-dark">{event.contactName}</p>
                                <p className="lato-dark">{event.contactPhone}</p>
                                <p className="lato-dark">t{event.contactEmail}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p className="lato-dark">{event.notesDetails}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg schedule-new ml-2 mr-2 ">
                        <div className="row">
                          <h6 className="poppins-dark d-inline ">Schedule</h6>
                          <i className="fa-solid fa-clock d-inline m-1 info-new" />
                        </div>
                        <div className="row">
                          <div className="col box-shadow rounded schedule-details-new">
                            <ul>
                              {
                                this.state.schedules?.map((event, index) => {
                                  // console.log('event.showId:', event.showId)
                                  // console.log('event.scheduleId:', event.scheduleId)
                                  // console.log('index:', index)

                                  return (
                                    event.showId === this.state.tourDates[event.showId - 1].showId
                                      ? <li className='schedule-event'key={event.scheduleId}>{event.startTime} - {event.endTime} {event.scheduleDetails} | {event.showId}</li>
                                      : <li>nothing to see here...</li>
                                  );
                                })
                              }
                            </ul>
                            {/* <ul>
                                <li className="lato-dark">9:30am - 10:30am: Travel</li>
                                <li className="lato-dark">4:00pm - 5:00pm Load In </li>
                                <li className="lato-dark">6:30pm - Doors</li>
                                <li className="lato-dark">7:00pm - 7:30pm Support 1</li>
                                <li className="lato-dark">7:45pm - End Limp Bizkit</li>
                                <li className="lato-dark">9:30am - 10:30am: Travel</li>
                                <li className="lato-dark">4:00pm - 5:00pm Load In </li>
                                <li className="lato-dark">6:30pm - Doors</li>
                              </ul> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            }
        </ul>
        {/* <div className="dashboard-container d-flex justify-center flex-wrap mt-4 mr-3 ml-3">
          <h3 className="col-12 mb-5">{date} - {city}, {state}</h3>
          <div className="venues-notes-wrapper col-lg-3 col-12 mh-100">
            <div className="mb-3 mt-3">
              <h6 className="d-inline">VENUE</h6>
              <i className="fa-solid fa-location-dot mt-1 info" />
            </div>
            <div className="venues col-12 info p-3" id="venue">
              <div className="row d-block">
                <p className="text-center lead">{venueName}</p>
                <p className="text-center lead">{line1}</p>
                <p className="text-center lead">{city}, {state}</p>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <h6 className="d-inline">NOTES</h6>
              <i className="fa-solid fa-clipboard-list mt-1 info" />
            </div>
            <div className="notes col-12 info" id="notes">
              <div className="row mt-3">
                <pre className="pl-3">{notesDetails}</pre>
              </div>
            </div>
          </div>
          <div className="schedule-wrapper col-lg-3 col-12 mh-100 " id="schedule">
            <div className="mb-3 mt-3">
              <h6 className="d-inline">SCHEDULE</h6>
              <i className="fa-solid fa-clock info" />
            </div>
            <div className=" schedules col-12 h-100">
              <ul className="pl-2">
                {
                          this.state.schedules.map(event => {
                            return (
                              <li className="text-white" key={event.scheduleId}>
                                {event.startTime} - {event.endTime} {event.scheduleDetails}
                              </li>
                            );
                          })
                        }
              </ul>

            </div>
          </div>
          <div className="contacts-wrapper col-lg-3 col-12" id="contacts">
            <div className="mb-3 mt-3">
              <h6 className="d-inline">CONTACTS</h6>
              <i className="fa-solid fa-phone info" />
            </div>
            <div className="contacts col-12 h-50 info p-3">
              <p className="pl-2">{contactEmail} </p>
              <p className="pl-2">{contactName}</p>
              <p className="pl-2">{contactPhone}</p>
            </div>
          </div>
          <div className="col-lg-3 col-12" id="dates">
            <div className="mb-3 mt-3">
              <h6 className='d-inline'>DATES</h6>
              <i className="fa-solid fa-calendar-days info" />
            </div>
            <div className=" dates col-12 info p-0">
              <ul>
                {
                          this.props.tourDates.map(event => {
                            return (
                              <li className="row date-wrapper pl-3 " key={event.showId}>
                                <a href="#" className="date col-6 ">{event.showDate}</a>
                                <a href="#" className="city"><b>{event.dateCity},{event.dateState} </b><br />{event.dateVenue}</a>
                              </li>
                            );
                          })
                        }
              </ul>
            </div>
          </div>
        </div> */}
      </div >
    );
  }
}
