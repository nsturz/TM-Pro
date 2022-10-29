import React from 'react';

// trying to figure out how to get the trash and pen icons to only appear if their
// parent <li /> is being hovered over / clicked.

export default class TourDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: null,
      trashClass: 'fa-solid fa-trash m-2 d-none',
      penClass: 'fa-solid fa-pen-to-square m-2 d-none'
    };

    this.showIcons = this.showIcons.bind(this);
    this.hideIcons = this.hideIcons.bind(this);
  }

  showIcons(event) {
    this.setState({
      trashClass: 'fa-solid fa-trash m-2',
      penClass: 'fa-solid fa-pen-to-square m-2'
    });

    // console.log('event.target.id:', event.id)
  }

  hideIcons(event) {
    this.setState({
      trashClass: 'fa-solid fa-trash m-2 d-none',
      penClass: 'fa-solid fa-pen-to-square m-2 d-none'
    });
  }

  render() {
    // console.log('this.props.tourDates:', this.props.tourDates)
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
                  onClick={this.showIcons}
                  onMouseLeave={this.hideIcons}>
                    <div className="col-3 col-lg-1 mr-3 calendar-date">
                      <p className="calendar-date-text text-center font-weight-bold d-block text-white">
                        {event.showDate}
                      </p>
                    </div>
                    <div className="col-5 col-lg-8 ">
                      <p className="text-white font-weight-bold">{event.dateCity}</p>
                      <pre className="text-white font-weight-light font-italic m-0">{event.dateVenue}</pre>
                    </div>
                    <div className="col-2 col-lg-2 ml-5">
                      <a href=""><i className={this.state.penClass}/></a>
                      <a href=""><i className={this.state.trashClass} /></a>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
