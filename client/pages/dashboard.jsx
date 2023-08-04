import React from 'react';
import NewTourDate from '../components/new-tour-date';
import EditTourDate from '../components/edit-tour-date';
import DeleteTourDate from '../components/delete-date';

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
      destination: '',
      editModalStatus: 'position-absolute modal-wrapper d-none',
      addModalStatus: 'position-absolute modal-wrapper d-none',
      deleteModalStatus: 'position-absolute delete-modal-wrapper d-none',
      editModalOverlay: 'overlay d-none',
      addModalOverlay: 'overlay d-none',
      deleteModalOverlay: 'overlay d-none'
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.addTourDate = this.addTourDate.bind(this);
    this.editTourDate = this.editTourDate.bind(this);
    this.deleteTourDate = this.deleteTourDate.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.hideAddModal = this.hideAddModal.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
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

  // ***MODAL SHOWING / HIDING 👇🏼***

  showAddModal() {
    this.setState({
      addModalStatus: 'position-absolute modal-wrapper',
      addModalOverlay: 'overlay'
    });
  }

  hideAddModal() {
    this.setState({
      addModalStatus: 'position-absolute modal-wrapper d-none',
      addModalOverlay: 'overlay d-none'
    });
  }

  showEditModal() {
    this.setState({
      editModalStatus: 'position-absolute modal-wrapper',
      editModalOverlay: 'overlay'
    });
  }

  hideEditModal() {
    this.setState({
      editModalStatus: 'position-absolute modal-wrapper d-none',
      editModalOverlay: 'overlay d-none'
    });
  }

  showDeleteModal() {
    this.setState({
      deleteModalStatus: 'position-absolute delete-modal-wrapper',
      deleteModalOverlay: 'overlay'
    });
  }

  hideDeleteModal() {
    this.setState({
      deleteModalStatus: 'position-absolute delete-modal-wrapper d-none ',
      deleteModalOverlay: 'overlay d-none'
    });
  }

  // ***MODAL SHOWING / HIDING 👆🏼***

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
              origin: `${tourDates[index].city},${tourDates[index].state}`,
              destination: `${tourDates[index + 1].city},${tourDates[index + 1].state}`
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

  addTourDate(newTourDate) {
    fetch('/api/new-date', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTourDate)
    })
      .then(response => response.json())
      .then(newTourDate => {
        this.setState({
          tourDates: this.state.tourDates.concat(newTourDate)
        });
      })
      .catch(console.error);
  }

  editTourDate(editedTourDate, showId) {
    fetch(`/api/edit-date/${showId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedTourDate)
    })
      .then(() => {
        const newTourDates = [...this.state.tourDates];
        for (let i = 0; i < newTourDates.length; i++) {
          if (newTourDates[i].showId === showId) {
            newTourDates.splice(i, 1, editedTourDate);
          }
        } this.setState({ tourDates: newTourDates });
      })
      .catch(console.error);
  }

  deleteTourDate(selectedDate) {
    fetch('/api/delete-date', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedDate)
    })
      .then(() => {
        const newTourDates = [...this.state.tourDates];
        for (let i = 0; i < newTourDates.length; i++) {
          if (newTourDates[i].showId === selectedDate.showId) {
            newTourDates.splice(i, 1);
          }
        } this.setState({ tourDates: newTourDates });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="container" >
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
            <button type="submit" className="btn blue-btn"> Select Date</button>
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
          <div className="row d-flex justify-content-lg-end justify-content-center mr-2">
            <button onClick={this.showAddModal} type="button" className="btn btn-primary options-btn mr-2 ml-2 rounded-circle border-0">
              <i className="options-btn-icon fa-solid fa-plus text-light" />
            </button>
            <button onClick={this.showEditModal} className="btn btn-primary options-btn mr-2 ml-2 rounded-circle border-0">
              <i className="options-btn-icon fa-solid fa-pen-to-square text-light" />
            </button>
            <button onClick={this.showDeleteModal} className="btn btn-secondary options-btn mr-2 ml-2 rounded-circle border-0" disabled>
              <i className="options-btn-icon fa-solid fa-trash text-light" />
            </button>
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
                    <h6 className="lato-dark m-2">{this.state.show.venueName}</h6>
                    <h6 className="lato-dark m-2"> {this.state.show.line1}</h6>
                    <h6 className="lato-dark m-2">{this.state.show.city}, {this.state.show.state}</h6>
                  </div>
                  <div className="d-flex justify-content-center mt-3" />
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
                      <div className="d-flex">
                        <p className="text-primary d-inline mr-1">Contact: </p>
                        <p className="lato-dark">{this.state.show.contactName}</p>
                      </div>
                      <div className="d-flex">
                        <p className="text-primary mr-1"> Phone: </p>
                        <p className="lato-dark">{this.state.show.contactPhone}</p>
                      </div>
                      <div className="d-flex">
                        <p className="text-primary mr-1">Email: </p>
                        <p className="lato-dark">{this.state.show.contactEmail}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="text-primary">Notes: </p>
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
        <NewTourDate onSubmit={this.addTourDate} artists={this.props.artists} addModalStatus={this.state.addModalStatus}
          showAddModal={this.showAddModal} hideAddModal={this.hideAddModal} addModalOverlay={this.state.addModalOverlay} />
        <EditTourDate onSubmit={this.editTourDate} tourDates={this.state.tourDates}
          editModalStatus={this.state.editModalStatus} hideEditModal={this.hideEditModal} editModalOverlay={this.state.editModalOverlay} />
        <DeleteTourDate deleteModalStatus={this.state.deleteModalStatus} deleteModalOverlay={this.state.deleteModalOverlay}
          hideDeleteModal={this.hideDeleteModal} showId={this.state.show.showId} onSubmit={this.deleteTourDate}/>
      </div >
    );
  }
}
