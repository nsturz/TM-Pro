import React from 'react';

export default class EditTourDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      newScheduleEventId: 1,
      showId: null,
      addressId: null,
      date: '',
      line1: '',
      city: '',
      state: '',
      country: '',
      venueName: '',
      notesDetails: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      scheduleEvents: [],
      newScheduleEvents: []
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleVenueNameChange = this.handleVenueNameChange.bind(this);
    this.handleNotesDetailsChange = this.handleNotesDetailsChange.bind(this);
    this.handleContactNameChange = this.handleContactNameChange.bind(this);
    this.handleContactPhoneChange = this.handleContactPhoneChange.bind(this);
    this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleScheduleDetailsChange = this.handleScheduleDetailsChange.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.addScheduleEvent = this.addScheduleEvent.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value
    });
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

  handleVenueNameChange(event) {
    this.setState({
      venueName: event.target.value
    });
  }

  handleNotesDetailsChange(event) {
    this.setState({
      notesDetails: event.target.value
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

  handleContactEmailChange(event) {
    this.setState({
      contactEmail: event.target.value
    });
  }

  handleStartTimeChange(event, index) {
    const newArray = [...this.state.scheduleEvents];
    newArray[index].startTime = event.target.value;
    this.setState({
      scheduleEvents: newArray
    });
  }

  handleEndTimeChange(event, index) {
    const newArray = [...this.state.scheduleEvents];
    newArray[index].endTime = event.target.value;
    this.setState({
      scheduleEvents: newArray
    });
  }

  handleScheduleDetailsChange(event, index) {
    const newArray = [...this.state.scheduleEvents];
    newArray[index].details = event.target.value;
    this.setState({
      scheduleEvents: newArray
    });
  }

  addScheduleEvent() {
    const scheduleEventDetails = {
      newScheduleEventId: this.state.newScheduleEventId,
      click: this.state.click,
      startTime: '',
      endTime: '',
      details: ''
    };
    this.setState({
      click: this.state.click + 1,
      scheduleEvents: [...this.state.scheduleEvents, scheduleEventDetails],
      newScheduleEventId: this.state.newScheduleEventId + 1
    });
  }

  selectDate(event) {
    const tourDates = this.props.tourDates;
    for (let i = 0; i < tourDates.length; i++) {
      if (event.target.value === tourDates[i].date) {
        fetch(`/api/select-show/${tourDates[i].showId}`)
          .then(response => response.json())
          .then(show => {
            this.setState({
              showId: show.showId,
              date: show.date,
              addressId: show.addressId,
              line1: show.line1,
              city: show.city,
              state: show.state,
              country: show.country,
              venueName: show.venueName,
              notesDetails: show.notesDetails,
              contactName: show.contactName,
              contactPhone: show.contactPhone,
              contactEmail: show.contactEmail
            });
            fetch(`/api/schedules/${tourDates[i].showId}`)
              .then(response => response.json())
              .then(scheduleEvents => {
                this.setState({
                  scheduleEvents
                });
              });
          });
      }
    }
  }

  closeModal(event) {
    this.setState({
      click: 0,
      newScheduleEventId: 1,
      showId: null,
      addressId: null,
      date: '',
      line1: '',
      city: '',
      state: '',
      country: '',
      venueName: '',
      notesDetails: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      scheduleEvents: [],
      newScheduleEvents: []
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const showId = this.state.showId;
    const editedTourDate = {
      showId: this.state.showId,
      addressId: this.state.addressId,
      scheduleEvents: this.state.scheduleEvents,
      line1: this.state.line1,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      contactEmail: this.state.contactEmail,
      contactName: this.state.contactName,
      contactPhone: this.state.contactPhone,
      notesDetails: this.state.notesDetails,
      date: this.state.date,
      venueName: this.state.venueName
    };
    this.props.onSubmit(editedTourDate, showId);
    this.setState({
      click: 0,
      newScheduleEventId: 1,
      showId: null,
      addressId: null,
      date: '',
      line1: '',
      city: '',
      state: '',
      country: '',
      venueName: '',
      notesDetails: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      scheduleEvents: [],
      newScheduleEvents: []
    });
    this.closeModal();
    this.props.hideEditModal();
  }

  render() {
    return (
      <div className="container">
        <div className={this.props.editModalOverlay} />
        <div className={this.props.editModalStatus}>
          <div className="modal-container d-flex justify-content-center bg-white rounded pt-3">
            <form id="edit-tour-date-form" onSubmit={this.handleSubmit} className="col-10 mb-2 mt-2">
              <div className="edit-modal-title d-flex justify-content-between">
                <h5>Edit Date</h5>
                <button onClick={() => {
                  this.props.hideEditModal();
                  this.closeModal();
                }} className="border-0 bg-transparent">x</button>
              </div>
              <div className="mb-2 mt-2">
                <select value={this.state.date} name="artist-select" className="form-control font-weight-light" onChange={this.selectDate}>
                  <option value="">Select a tour date to edit.</option>
                  {
                    this.props.tourDates.map(event => {
                      return (
                        <option
                          id={event.showId}
                          key={event.showId}>
                          {event.date}
                        </option>
                      );
                    })
                  }
                </select>
              </div>
              <div className="mb-2 mt-2">
                <label htmlFor="date" className="font-weight-bold">Date</label>
                <input value={this.state.date} name="date" type="date" className="form-control fw-light" onChange={this.handleDateChange} />
              </div>
              <div className="mb-2 mt-2">
                <label htmlFor="venue" className="font-weight-bold">Venue</label>
                <input value={this.state.venueName} name="venue" type="text" className="form-control" onChange={this.handleVenueNameChange} />
              </div>
              <div className="mb-2 mt-2">
                <label htmlFor="address" className="font-weight-bold">Location</label>
                <input value={this.state.line1} name="address" type="text" placeholder="Address" className="form-control" onChange={this.handleAddressChange} />
              </div>
              <div className="d-flex">
                <input value={this.state.city} name="city" type="text" placeholder="City" className="form-control mt-2 mb-2 mr-2" onChange={this.handleCityChange} />
                <input value={this.state.state} name="state" type="text" placeholder='State' className="form-control mt-2 mb-2 ml-2 mr-2" onChange={this.handleStateChange} />
                <input value={this.state.country} name="country" type="text" placeholder='USA' className="form-control mt-2 mb-2 ml-2" onChange={this.handleCountryChange} />
              </div>
              <div className="mb-2 mt-2">
                <label htmlFor="notes" className="font-weight-bold">Notes</label>
                <textarea value={this.state.notesDetails} name="notes" id="" className="form-control" onChange={this.handleNotesDetailsChange} />
              </div>
              <div className="mb-2 mt-2">
                <label htmlFor="contacts" className="font-weight-bold">Contact</label>
                <input value={this.state.contactName} type="text" className="form-control mt-2 mb-2" placeholder='Name' onChange={this.handleContactNameChange} />
                <input value={this.state.contactPhone} type="text" className='form-control mt-2 mb-2' placeholder='Phone' onChange={this.handleContactPhoneChange} />
                <input value={this.state.contactEmail} type="text" className='form-control mt-2 mb-2' placeholder='Email' onChange={this.handleContactEmailChange} />
              </div>
              <label htmlFor="schedule" className="font-weight-bold col-12">Schedule</label>
              <ul name="schedule" className="col-12">
                {
                  this.state.scheduleEvents.map((event, index) => {
                    return (
                      <li id={event.id} key={event.id}>
                        <div className="d-flex">
                          <div className="col-6">
                            <label htmlFor="start-time" className="text-center">Start Time</label>
                            <input value={event.startTime} type="time" className="form-control" onChange={event => this.handleStartTimeChange(event, index)} />
                          </div>
                          <div className="col-6">
                            <label htmlFor="end-time" className="text-center">End Time</label>
                            <input value={event.endTime} type="time" className="form-control" onChange={event => this.handleEndTimeChange(event, index)} />
                          </div>
                        </div>
                        <div className="d-flex">
                          <div className="col-11">
                            <label htmlFor="details" className="text-center">Details</label>
                            <input value={event.details} type="text" className="form-control" onChange={event => this.handleScheduleDetailsChange(event, index)} />
                          </div>
                          <div className="col-1">
                            <button type="button" className="remove-schedule-event-btn bg-transparent border-0 mt-2 pr-5" onClick={this.handleClick}>
                              <i className="fa-solid fa-x text-dark fa-lg mt-5" id={event.id} />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
              <button type="button" className="add-schedule-event-btn col-12 mt-3 bg-transparent border-0 mb-3">
                <i className="fa-solid fa-plus" onClick={this.addScheduleEvent} />
              </button>
              <hr />
              <div className="d-flex justify-content-end">
                <button onClick={() => {
                  this.props.hideEditModal();
                  this.closeModal();
                }} type="button" className="btn btn-secondary mr-3">Close</button>
                <button type="submit" className="btn blue-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
