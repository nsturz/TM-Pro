import React from 'react';

// almost done, just need to figure out this 👇🏼
// trying to figure out how to get the trash and pen icons to only appear if their
// parent <li /> is being hovered over / clicked. one at a time.

export default class TourDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: null,
      trashClass: 'btn btn-link m-2',
      penClass: 'btn btn-link m-2',
      overlay: 'overlay d-none',
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute d-none'
    };

    this.showIcons = this.showIcons.bind(this);
    this.hideIcons = this.hideIcons.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showIcons(event) {

    // for(let i = 0; i < this.props.tourDates.length; i++){
    // if(this.props.tourDates[i].showId === Number(event.target.id)){
    this.setState({
      trashClass: 'btn btn-link m-2',
      penClass: 'btn btn-link m-2'
    });
    // }
    // }

    // console.log('event.target.id:', Number(event.target.id))

  }

  showModal(event) {
    const idValue = Number(event.target.id);
    this.setState({
      showId: idValue,
      overlay: 'overlay',
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute'
    });
  }

  hideIcons(event) {
    this.setState({
      trashClass: 'fa-solid fa-trash m-2 d-none',
      penClass: 'fa-solid fa-pen-to-square m-2 d-none'
    });
  }

  hideModal() {
    this.setState({
      overlay: 'overlay d-none',
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute d-none'
    });
  }

  handleSubmit(event) {
    const selectedDate = {
      showId: this.state.showId
    };
    const tourDates = [...this.props.tourDates];
    for (let i = 0; i < tourDates.length; i++) {
      if (tourDates[i].showId === Number(event.target.id)) {
        tourDates.splice(i, 1);
      }
    }
    this.props.onSubmit(selectedDate, tourDates);
    this.setState({
      showId: null,
      modal: 'col-10 col-lg-4 delete-modal-wrapper text-center rounded position-absolute d-none',
      overlay: 'overlay d-none'
    });
  }

  render() {
    // console.log('this.props.tourDates:', this.props.tourDates)
    // console.log('this.state.showId:', this.state.showId)
    return (
      <div className="container calendar-container">
        <div className="d-flex justify-content-lg-between row p-2">
          <h3 className="m-3 col-9">North American Tour 2023</h3>
          <a href="#"><i className="fa-solid fa-plus pt-1 m-3" /></a>
        </div>
        <div className="row dates dates-wrapper">
          <ul className="col-12">
            {
              this.props.tourDates.map(event => {
                return (
                  <li
                  id={event.showId}
                  className="row calendar-list-item"
                  key={event.showId}

                  >
                    <div className="col-3 col-lg-1 mr-3 calendar-date">
                      <p className="calendar-date-text text-center font-weight-bold d-block text-white">
                        {event.showDate}
                      </p>
                    </div>
                    <div className="col-5 col-lg-8 ">
                      <p className="text-white font-weight-bold" id={event.showId}>{event.dateCity}</p>
                      <pre className="text-white font-weight-light font-italic m-0" id={event.showId}>{event.dateVenue}</pre>
                    </div>
                    <div className="col-2 col-lg-2 ml-5">
                      <button
                      className={this.state.penClass}
                      onClick={this.showModal}>
                        <i
                        className='fa-solid fa-trash text-white text-sm'
                        id={event.showId} />
                      </button>
                      <button className={this.state.trashClass}>
                        <i
                        className='fa-solid fa-pen-to-square text-white text-sm'
                        id={event.showId} />
                      </button>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className={this.state.overlay} />
        <div className={this.state.modal}>
          <h3 className="font-weight-bold m-3">DELETE THIS DATE?</h3>
          <button
          type="submit"
          className="btn confirm-button font-weight-bold text-white m-3"
          onClick={this.handleSubmit}
          >CONFIRM</button>
          <button className="btn font-weight-bold m-3" onClick={this.hideModal}>CANCEL</button>
        </div>
      </div>

    );
  }
}
