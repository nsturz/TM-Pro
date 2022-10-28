import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      notes: '',
      contacts: '',
      schedules: []
    };

  }

  componentDidMount() {
    fetch('/api/shows/1')
      .then(res => res.json())
      .then(show => this.setState({ show }));

    fetch('api/notes/1')
      .then(res => res.json())
      .then(notes => this.setState({ notes }));

    fetch('api/contacts/1')
      .then(res => res.json())
      .then(contacts => this.setState({ contacts }));

    fetch('api/schedules')
      .then(res => res.json())
      .then(schedules => this.setState({ schedules }));

  }

  render() {
    const { city, date, line1, state, venueName } = this.state.show;
    const { details } = this.state.notes;
    const { email, name, contactPhone } = this.state.contacts;
    return (
      <div className="container dashboard-container d-flex flex-wrap mh-100">
        <h3 className="col-12 mb-5">{ date } - { city }, { state }</h3>
        <div className="venues-notes-wrapper col-lg-3 col-12 mh-100">
          <div className="venues col-12 h-50 info" id="venue">
            <h6 className="d-inline">VENUE</h6>
            <i className="fa-solid fa-location-dot mt-1" />
            <div className="row d-block">
              <hr className="w-100" />
              <p className="text-center lead">{venueName}</p>
              <p className="text-center lead">{line1}</p>
              <p className="text-center lead">{city}, {state}</p>
            </div>
          </div>
          <div className="notes col-12 h-50 info" id="notes">
            <h6 className="d-inline">NOTES</h6>
            <i className="fa-solid fa-clipboard-list mt-1" />
            <div className="row">
              <hr className="w-100" />
              <pre className="pl-3">{details}</pre>
            </div>
          </div>
        </div>
        <div className="schedule-wrapper col-lg-3 col-12 mh-100 " id="schedule">
          <div className=" schedules col-12 h-100 info">
            <h6 className="pl-2 d-inline">SCHEDULE</h6>
            <i className="fa-solid fa-clock" />
            <hr className="w-100" />
            <ul className="pl-2">
              {
                this.state.schedules.map(event => {
                  return (
                    <li key={event.scheduleId}>
                      {event.startTime} - {event.endTime} {event.scheduleDetails}
                    </li>
                  );
                })
              }
            </ul>

          </div>
        </div>
        <div className="contacts-wrapper col-lg-3 col-12" id="contacts">
          <div className="contacts col-12 h-50 info">
            <h6 className="pl-2 d-inline">CONTACTS</h6>
            <i className="fa-solid fa-phone" />
            <hr className="w-100" />
            <p className="pl-2">{ email } </p>
            <p className="pl-2">{ name }</p>
            <p className="pl-2">{ contactPhone }</p>
          </div>
        </div>
        <div className="dates-wrapper col-lg-3 col-12" id="dates">
          <div className=" dates col-12 mh-100 info m-0">
            <h6 className='d-inline'>DATES</h6>
            <i className="fa-solid fa-calendar-days" />
            <ul className="dates-list">
              {
                this.props.tourDates.map(event => {
                  return (
                    <li className="row date-wrapper" key={event.showId}>
                      <a href="#" className="date col-6">{event.showDate}</a>
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
