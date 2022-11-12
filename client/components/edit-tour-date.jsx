import React from 'react';

export default class EditTourDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {
        date: '',
        line1: '',
        city: '',
        state: '',
        country: '',
        venueName: '',
        notesDetails: '',
        contactName: '',
        contactPhone: '',
        contactEmail: ''
      }
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/shows/13')
      .then(response => response.json())
      .then(show => {
        this.setState({
          show: {
            date: show.date,
            line1: show.line1,
            city: show.city,
            state: show.state,
            country: show.country,
            venueName: show.venueName,
            notesDetails: show.notesDetails,
            contactName: show.contactName,
            contactPhone: show.contactPhone,
            contactEmail: show.contactEmail
          }
        });
      });
  }

  handleDateChange(event) {
    this.setState({
      show: {
        date: event.target.value
      }
    });
  }

  handleAddressChange(event) {
    this.setState({
      show: {
        line1: event.target.value
      }
    });
  }

  handleCityChange(event) {
    this.setState({
      show: {
        city: event.target.value
      }
    });
  }

  handleStateChange(event) {
    this.setState({
      show: {
        state: event.target.value
      }
    });
  }

  handleCountryChange(event) {
    this.setState({
      show: {
        country: event.target.value
      }
    });
  }

  handleVenueNameChange(event) {
    this.setState({
      show: {
        venueName: event.target.value
      }
    });
  }

  handleNotesDetailsChange(event) {
    this.setState({
      show: {
        notesDetails: event.target.value
      }
    });
  }

  handleContactNameChange(event) {
    this.setState({
      show: {
        contactName: event.target.value
      }
    });
  }

  handleContactPhoneChange(event) {
    this.setState({
      show: {
        contactPhone: event.target.value
      }
    });
  }

  handleContactEmailChange(event) {
    this.setState({
      show: {
        contactEmail: event.target.value
      }
    });
  }

  // selectDate(event){
  //   const tourDates = this.props.tourDates;
  //   for(let i = 0; i < tourDates.length; i++){
  //     if(event.target.id === tourDates[i].showId){
  //       fetch(`/api/shows/${tourDates[i].showId}`)
  //       .then(response => response.json())
  //       .then(date => {
  //         this.setState({show: date})
  //       })
  //     }
  //   }
  // }
  render() {
    // console.log('this.props.tourDates', this.props.tourDates)
    // console.log('this.state.show:', this.state.show)
    return (
      <div className="container new-tour-date-form  d-flex justify-content-center flex-wrap">
        <form
          className="row"
          id="new-tour-date-form"
          onSubmit={this.handleSubmit}>
          <div className="col-12 col-lg-6 form-group mt-3">
            <div className="row justify-content-center">
              <label htmlFor="artist-select-form" className="col-12 text-center" />
              <select name="artist-select-form" id="" className="form-control col-6" onChange={this.handleNameChange}>
                <option value="">Select a tour date.</option>
                {
                  this.props.tourDates.map(event => {
                    return (
                      <option
                      id={event.showId}
                      key={event.showId}>
                        {event.showDate}
                        {event.dateCity}
                        {event.dateState}
                        {event.dateVenue}
                      </option>
                    );
                  })
                }
              </select>
              <label htmlFor="date" className="col-12 text-center mt-3">DATE</label>
              <input
              name="date"
              type="date"
              className="form-control col-6"
              onChange={this.handleDateChange}
              value={ this.state.show.date }/>
            </div>
            <div className="row justify-content-center mt-3">
              <label htmlFor="city" className="col-12 text-center">LOCATION</label>
              <input
              name="city"
              value={ this.state.show.city }
              type="text"
              placeholder="City"
              className="m-1 form-control col-5"
              onChange={this.handleCityChange} />
              <input
              name="state"
              value={ this.state.show.state }
              type="text"
              placeholder='State'
              className="m-1 form-control col-2"
              onChange={this.handleStateChange} />
              <input
              name="country"
              value={ this.state.show.country }
              type="text"
              placeholder='USA'
              className="m-1 form-control col-2"
              onChange={this.handleCountryChange} />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <label htmlFor="address" className="col-12 text-center">ADDRESS</label>
              <input
              name="address"
              type="text"
              className="form-control col-6"
              onChange={this.handleAddressChange}
              value={ this.state.show.line1 }
              />
            </div>
            <label htmlFor="" className=" col-12 text-center mt-3 mb-3">SCHEDULE</label>
            {/* <ul>
              {
                this.state.scheduleEvents.map((event, index) => {
                  return (
                    <li className={event.class} id={event.id} key={event.id}>
                      <div className="col-5">
                        <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                        <input type="time" className="form-control h-50" onChange={event => this.handleStartTimeChange(event, index)} />
                      </div>
                      <div className="col-5">
                        <label htmlFor="end-time" className="text-center col-12">End Time</label>
                        <input type="time" className="form-control h-50" onChange={event => this.handleEndTimeChange(event, index)} />
                      </div>
                      <button type="button" className="remove-schedule-event-btn col-1 d-flex align-items-center mt-3 bg-transparent border-0" onClick={this.handleClick}>
                        <i className="fa-solid fa-x text-white" id={event.id} />
                      </button>
                      <div className="col-12 mt-3">
                        <div className="row d-flex justify-content-center">
                          <label htmlFor="details" className="text-center col-12">Details</label>
                          <input type="text" className="form-control col-8 h-50" onChange={event => this.handleScheduleDetailsChange(event, index)} />
                        </div>
                      </div>
                    </li>
                  );
                })
              }
            </ul> */}
            <button type="button" className=" add-schedule-event-btn col-12 d-flex justify-content-center mt-3 bg-transparent border-0">
              <i className="fa-solid fa-plus text-white" onClick={this.addScheduleEvent} />
            </button>
          </div>
          <div className="col-12 col-lg-6 form-group mt-3">
            <div className="row d-flex justify-content-center">
              <label htmlFor="venue" className="col-12 text-center">VENUE</label>
              <input
                name="venue"
                type="text"
                className="form-control col-6"
                onChange={this.handleVenueNameChange}
                value={ this.state.show.venueName }
                />
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <label htmlFor="notes" className="col-12 text-center">NOTES</label>
              <textarea
              name="notes"
              id=""
              className="form-control col-8"
              onChange={this.handleNotesDetailsChange}
              value={ this.state.show.notesDetails }
              />
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <label
                htmlFor="contacts"
                className="col-12 text-center">
                CONTACT
              </label>
              <input
              type="text"
              value={ this.state.show.contactName }
              className="form-control col-8 m-1"
              placeholder='Name'
              onChange={this.handleContactNameChange} />
              <input
              type="text"
              value={ this.state.show.contactPhone }
              className='form-control col-8 m-1'
              placeholder='Phone'
              onChange={this.handleContactPhoneChange} />
              <input
              type="text"
              value={ this.state.show.contactEmail }
              className='form-control col-8 m-1'
              placeholder='Email'
              onChange={this.handleContactEmailChange} />
            </div>
          </div>
          <div className="col-12 mt-3 mb-3">
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn new-artist-submit">Update</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
