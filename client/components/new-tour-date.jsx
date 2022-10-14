import React from 'react';
// SEE LINES 254 AND 253 10/14/22
// finish addTourDate( ) in app.jsx
export default class NewTourDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      scheduleEvents: [],
      id: 0,
      line1: '',
      city: '',
      state: '',
      country: '',
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      showId: '',
      startTime: null,
      endTime: null,
      scheduleDetails: '',
      date: null,
      venueName: '',
      venuePhone: '',
      notes: ''
    };

    this.addScheduleEvent = this.addScheduleEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleAddressChange(event) {
    this.setState({
      line1: event.target.value
    });
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleStateChange(event) {
    this.setState({
      state: event.target.value
    });
  }

  handleCountryChange(event) {
    this.setState({
      country: event.target.value
    });
  }

  handleContactEmailChange(event) {
    this.setState({
      contactEmail: event.target.value
    });
  }

  handleContactNameChange(event) {
    this.setState({
      contactName: event.target.value
    });
  }

  handleContactPhoneChange(event) {
    this.setState({
      contactPhone: event.target.value
    });
  }

  handleShowIdChange(event) {
    this.setState({
      showId: event.target.value
    });
  }

  handleStartTimeChange(event) {
    this.setState({
      startTime: event.target.value
    });
  }

  handleEndTimeChange(event) {
    this.setState({
      endTime: event.target.value
    });
  }

  handleScheduleDetailsChange(event) {
    this.setState({
      scheduleDetails: event.target.value
    });
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value
    });
  }

  handleVenueNameChange(event) {
    this.setState({
      venueName: event.target.value
    });
  }

  handleVenuePhoneChange(event) {
    this.setState({
      venuePhone: event.target.value
    });
  }

  handleNotesChange(event) {
    this.setState({
      notes: event.target.value
    });
  }

  addScheduleEvent(props) {
    const scheduleEventDetails = {
      class: 'row justify-content-center mt-3 mb-3',
      id: this.state.id,
      click: this.state.click
    };
    this.setState({
      click: this.state.click + 1,
      scheduleEvents: [...this.state.scheduleEvents, scheduleEventDetails],
      id: this.state.id + 1
    });
  }

  handleClick(event) {
    const array = [...this.state.scheduleEvents];
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === Number(event.target.id)) {
        array.splice(i, 1);
        this.setState({ scheduleEvents: array });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTourDate = {
      line1: this.state.line1,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      contactEmail: this.state.contactEmail,
      contactName: this.state.contactName,
      contactPhone: this.state.contactPhone,
      showId: this.state.showId,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      scheduleDetails: this.state.scheduleDetails,
      date: this.state.date,
      venueName: this.state.venueName,
      venuePhone: this.state.venuePhone
    };
    this.props.onSubmit(newTourDate);
    this.setState({
      line1: '',
      city: '',
      state: '',
      country: '',
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      showId: '',
      startTime: null,
      endTime: null,
      scheduleDetails: '',
      date: null,
      venueName: '',
      venuePhone: ''
    });
    document.getElementById('new-tour-date-form').reset();
  }

  render() {
    return (
      <div className="container new-tour-date-form  d-flex justify-content-center flex-wrap">
        <form
        className="row"
        id="new-tour-date-form"
        onSubmit={ this.onSubmit }>
          <div className="col-12 col-lg-6 form-group mt-3">
            <div className="row justify-content-center">
              <label htmlFor="artist-select-form" className="col-12 text-center">ARTIST</label>
              <select name="artist-select-form" id="" className="form-control col-6">
                <option value="">Select an artist</option>
              </select>
              <label htmlFor="date" className="col-12 text-center mt-3">DATE</label>
              <input name="date" type="date" className="form-control col-6" onChange={ this.handleDateChange } />
            </div>
            <div className="row justify-content-center mt-3">
              <label htmlFor="city" className="col-12 text-center">LOCATION</label>
              <input name="city" type="text" placeholder="City" className="m-1 form-control col-5" onChange={ this.handleCityChange } />
              <input name="state" type="text" placeholder='State' className="m-1 form-control col-2" onChange={ this.handleStateChange } />
              <input name="country" type="text" placeholder='USA' className="m-1 form-control col-2" onChange={ this.handleCountryChange } />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <label htmlFor="address" className="col-12 text-center">ADDRESS</label>
              <input name="address" type="text" className="form-control col-6" onChange={ this.handleAddressChange }/>
            </div>
            <label htmlFor="" className=" col-12 text-center mt-3 mb-3">SCHEDULE</label>
            <ul>
              {
                this.state.scheduleEvents.map(event => {
                  return (
                    <li className={event.class} id={event.id} key={event.id}>
                      <div className="col-5">
                        <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                        <input type="time" className="form-control h-50" onChange={ this.handleStartTimeChange }/>
                      </div>
                      <div className="col-5">
                        <label htmlFor="end-time" className="text-center col-12">End Time</label>
                        <input type="time" className="form-control h-50" onChange={ this.handleEndTimeChange } />
                      </div>
                      <button type="button" className="remove-schedule-event-btn col-1 d-flex align-items-center mt-3 bg-transparent border-0" onClick={this.handleClick}>
                        <i className="fa-solid fa-x text-white" id={event.id}/>
                      </button>
                      <div className="col-12 mt-3">
                        <div className="row d-flex justify-content-center">
                          <label htmlFor="details" className="text-center col-12">Details</label>
                          <input type="text" className="form-control col-8 h-50" onChange={ this.handleScheduleDetailsChange } />
                        </div>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
            <button type="button" className=" add-schedule-event-btn col-12 d-flex justify-content-center mt-3 bg-transparent border-0">
              <i className="fa-solid fa-plus text-white" onClick={ this.addScheduleEvent } />
            </button>
          </div>
          <div className="col-12 col-lg-6 form-group mt-3">
            <div className="row d-flex justify-content-center">
              <label htmlFor="venue" className="col-12 text-center">VENUE</label>
              <input
              name="venue"
              type="text"
              className="form-control col-6"
              onClick={ this.handleVenueNameChange }
              // NEED TO ADD CODE HERE FOR VENUE PHONE NUMBER 👇🏼, AND MODIFY INPUT ABOVE 👆🏼
              />

            </div>
            <div className="row d-flex justify-content-center mt-5">
              <label htmlFor="notes" className="col-12 text-center">NOTES</label>
              <textarea name="notes" id="" className="form-control col-8" onChange={ this.handleNotesChange } />
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <label
              htmlFor="contacts"
              className="col-12 text-center"
              // NEED TO MODIFY INPUT BELOW, AND ADD CONTACT NAME / PHONE NUMBER / EMAIL 👇🏼👇🏼👇🏼
              >CONTACTS</label>

              <textarea name="contacts" id="" className="form-control col-8" />
            </div>
          </div>
          <div className="col-12 mt-3 mb-3">
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn new-artist-submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
