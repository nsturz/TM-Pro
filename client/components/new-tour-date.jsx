import React from 'react';
export default class NewTourDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      scheduleEvents: [],
      artistId: null,
      artist: '',
      id: 0,
      line1: '',
      city: '',
      state: '',
      country: '',
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      showId: '',
      date: '',
      venueName: '',
      notesDetails: ''
    };

    this.addScheduleEvent = this.addScheduleEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
    this.handleContactNameChange = this.handleContactNameChange.bind(this);
    this.handleContactPhoneChange = this.handleContactPhoneChange.bind(this);
    this.handleShowIdChange = this.handleShowIdChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.handleScheduleDetailsChange = this.handleScheduleDetailsChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleVenueNameChange = this.handleVenueNameChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleNameChange(event) {
    for (let i = 0; i < this.props.artists.length; i++) {
      if (event.target.value === this.props.artists[i].name) {
        this.setState({
          artistId: this.props.artists[i].artistId,
          artist: this.props.artists[i].name
        });
      }
    }
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
    newArray[index].scheduleDetails = event.target.value;
    this.setState({
      scheduleEvents: newArray
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

  handleNotesChange(event) {
    this.setState({
      notesDetails: event.target.value
    });
  }

  addScheduleEvent() {
    const scheduleEventDetails = {
      class: 'row justify-content-center mt-3 mb-3',
      id: this.state.id,
      click: this.state.click,
      startTime: null,
      endTime: null,
      scheduleDetails: ''
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

  closeModal(event) {
    this.setState({
      click: 0,
      scheduleEvents: [],
      artistId: null,
      artist: '',
      id: 0,
      line1: '',
      city: '',
      state: '',
      country: '',
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      showId: '',
      date: '',
      venueName: '',
      notesDetails: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTourDate = {
      artistId: this.state.artistId,
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
    this.props.onSubmit(newTourDate);
    this.setState({
      click: 0,
      scheduleEvents: [],
      artistId: null,
      id: 0,
      line1: '',
      city: '',
      state: '',
      country: '',
      contactEmail: '',
      contactName: '',
      contactPhone: '',
      showId: '',
      date: '',
      venueName: '',
      venuePhone: '',
      notesDetails: ''
    });
    document.getElementById('new-tour-date-form').reset();
  }

  render() {
    return (
      <div className="">
        <button type="button" data-toggle="modal" data-target="#newShowModal"
         className="btn btn-primary options-btn mr-2 ml-2 rounded-circle border-0">
          <i className="options-btn-icon fa-solid fa-plus text-light" />
        </button>
        <div className="modal fade" id="newShowModal" tabIndex="-1" role="dialog" aria-labelledby="newShowModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newShowModalLabel">New Date</h5>
                <button onClick={this.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="new-tour-date-form" onSubmit={this.handleSubmit}>
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="artist-select" className="font-weight-bold">Artist</label>
                    <select value={this.state.artist} id="artist-select" className="form-control fw-light" onChange={this.handleNameChange}>
                      <option value="">Select an artist</option>
                      {
                        this.props.artists?.map(event => {
                          return (
                            <option id={event.artistId} key={event.artistId}>{event.name}</option>
                          );
                        })
                      }
                    </select>
                  </div>
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="date" className="font-weight-bold">Date</label>
                    <input value={this.state.date} name="date" type="date" className="form-control fw-light" onChange={this.handleDateChange} />
                  </div>
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="venue" className="font-weight-bold">Venue</label>
                    <input value={this.state.venueName} name="venue" type="text" className="form-control" onChange={this.handleVenueNameChange} />
                  </div>
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="address" className="font-weight-bold">Location</label>
                    <input value={this.state.line1} name="address" type="text" placeholder="Address" className="form-control" onChange={this.handleAddressChange} />
                    <div className="d-flex">
                      <input value={this.state.city} name="city" type="text" placeholder="City" className="form-control mt-2 mb-2 mr-2" onChange={this.handleCityChange} />
                      <input value={this.state.state} name="state" type="text" placeholder='State' className="form-control mt-2 mb-2 ml-2 mr-2" onChange={this.handleStateChange} />
                      <input value={this.state.country} name="country" type="text" placeholder='USA' className="form-control mt-2 mb-2 ml-2" onChange={this.handleCountryChange} />
                    </div>
                  </div>
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="notes" className="font-weight-bold">Notes</label>
                    <textarea value={this.state.notesDetails} name="notes" id="" className="form-control" onChange={this.handleNotesChange} />
                  </div>
                  <div className="col-12 mb-2 mt-2">
                    <label htmlFor="contacts" className="font-weight-bold">Contact</label>
                    <input value={this.state.contactName} type="text" className="form-control mt-2 mb-2" placeholder='Name' onChange={this.handleContactNameChange} />
                    <input value={this.state.contactPhone} type="text" className='form-control mt-2 mb-2' placeholder='Phone' onChange={this.handleContactPhoneChange} />
                    <input value={this.state.contactEmail} type="text" className='form-control mt-2 mb-2' placeholder='Email' onChange={this.handleContactEmailChange} />
                  </div>
                  <label htmlFor="" className="ml-2 font-weight-bold col-12">Schedule</label>
                  <ul className="col-12">
                    {
                      this.state.scheduleEvents.map((event, index) => {
                        return (
                          <li id={event.id} key={event.id}>
                            <div className="d-flex">
                              <div className="col-6">
                                <label htmlFor="start-time" className="text-center">Start Time</label>
                                <input type="time" className="form-control" onChange={event => this.handleStartTimeChange(event, index)} />
                              </div>
                              <div className="col-6">
                                <label htmlFor="end-time" className="text-center">End Time</label>
                                <input type="time" className="form-control" onChange={event => this.handleEndTimeChange(event, index)} />
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="col-11">
                                <label htmlFor="details" className="text-center">Details</label>
                                <input type="text" className="form-control" onChange={event => this.handleScheduleDetailsChange(event, index)} />
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
                  <div className="modal-footer">
                    <button onClick={this.closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
