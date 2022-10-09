import React from 'react';

export default class TourDates extends React.Component {
  render() {
    return (
      <div className="container calendar-container">
        <div className="d-flex justify-content-between row p-2">
          <h3>North American Tour 2023</h3>
          <a href="#"><i className="fa-solid fa-plus pt-1" /></a>
        </div>
        <div className="row">
          <ul>
            <li>
              <div className="row">
                <div className="col-2 calendar-date">
                  <p className="text-center">MON</p>
                  <p className="text-center"> MAY 1 </p>
                </div>
                <div className="col-8">
                  <p className="text-white">Anaheim, CA</p>
                  <p className="text-white">Chain Reaction</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
