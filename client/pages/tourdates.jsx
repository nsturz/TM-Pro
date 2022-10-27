import React from 'react';

export default class TourDates extends React.Component {
  render() {
    return (
      <div className="container calendar-container">
        <div className="d-flex justify-content-lg-between row p-2">
          <h3 className="m-3 col-9">North American Tour 2023</h3>
          <a href="#"><i className="fa-solid fa-plus pt-1 m-3" /></a>
        </div>
        <div className="row">
          <ul className="col-12">
            <li className="row calendar-list-item">
              <div className="col-3 col-lg-1 ml-3 calendar-date">
                <p className="calendar-date-text text-center font-weight-bold d-block text-white m-0">
                  MON MAY 1
                </p>
              </div>
              <div className="col-5 col-lg-8 ">
                <p className="text-white font-weight-bold m-0">Anaheim, CA</p>
                <pre className="text-white font-weight-light font-italic m-0">Chain Reaction</pre>
              </div>
              <div className="col-2 col-lg-2 ml-5">
                <a href=""><i className="fa-solid fa-trash m-2 " /></a>
                <a href=""><i className="fa-solid fa-pen-to-square m-2" /></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
