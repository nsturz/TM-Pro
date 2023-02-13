import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      notes: '',
      contacts: '',
      schedules: [],
      tourDates: [],
      testSchedules: []
    };

  }

  componentDidMount() {
    fetch('api/shows')
      .then(res => res.json())
      .then(tourDates => this.setState({ tourDates }));

    fetch('/api/shows/1')
      .then(res => res.json())
      .then(show => this.setState({ show }));

    fetch('api/schedules')
      .then(res => res.json())
      .then(schedules => this.setState({ schedules }));

    fetch('api/all-schedules')
      .then(res => res.json())
      .then(testSchedules => this.setState({ testSchedules }));
  }

  render() {
    // console.log('this.state.testSchedules:', this.state.testSchedules)
    const { city, date, line1, state, venueName, notesDetails, contactEmail, contactPhone, contactName } = this.state.show;
    return (
      <div className="dashboard-container d-flex justify-center flex-wrap mt-4 mr-3 ml-3">
        <h3 className="col-12 mb-5">{ date } - { city }, { state }</h3>
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
            <p className="pl-2">{ contactEmail } </p>
            <p className="pl-2">{ contactName }</p>
            <p className="pl-2">{ contactPhone }</p>
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
      </div>
    );
  }
}
