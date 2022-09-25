import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="container dashboard-container d-flex flex-wrap">
        <div className="venues-notes-wrapper col-sm-3 col-12 ">
          <div className="venues col-12 h-50 info" id="venue">
            <h6>VENUE</h6>
            <i className="fa-solid fa-location-dot" />
            {/* <p id="venue">CHAIN REACTION</p>
            <p id="address">1652 LINCOLN AVE
              ANAHEIM, CA</p>
            <p id="phone-number">714-635-6067</p> */}
          </div>
          <div className="notes col-12 h-50 info" id="notes">
            <h6>NOTES</h6>
            <i className="fa-solid fa-clipboard-list" />
            {/* <p>SHOWERS: NO
              LAUNDRY: NO

              +++++

              CATERING: ALBERTOS

              +++++

              DRINKS: 2 TIX PER BAND
              MEMBER

              +++++

              WIFI: GENERICWIFINAME
              PASSWORD: LFZFINALPROJECT</p> */}
          </div>
        </div>
        <div className="schedule-wrapper col-sm-3 col-12  " id="schedule">
          <div className=" schedules col-12 h-100 info">
            <h6>SCHEDULE</h6>
            <i className="fa-solid fa-clock" />
            {/* <ul>
              <li>8:00PM - 11:00AM - TRAVEL</li>
              <li>4:00PM LOAD IN</li>
              <li>5:00PM WILDER SOUNDCHECK</li>
              <li>6:00PM SUPPORT SOUNDCHECK</li>
              <li>7:00PM DOORS</li>
              <li>8:00PM SUPPORT 1</li>
              <li>8:30PM  CHANGEOVER</li>
              <li>8:45PM SUPPORT 2</li>
              <li>9:15PM CHANGEOVER</li>
              <li>9:30PM - END  WILDER</li>
              <li>11:00PM CURFEW</li>
              <li>12:00AM - DEPART</li>
            </ul> */}
          </div>
        </div>
        <div className="contacts-wrapper col-sm-3 col-12" id="contacts">
          <div className="contacts col-12 h-50 info">
            <h6>CONTACTS</h6>
            <i className="fa-solid fa-phone" />
            {/* <p>EDGY PROMOTER DUDE

              714-459-3836

              booker@booking.com

              +++++

              JOSH PHOTOGRPAHER:

              562-927-2882</p> */}
          </div>
        </div>
        <div className="dates-wrapper col-sm-3 col-12" id="dates">
          <div className="dates col-12 h-100 info">
            <h6>DATES</h6>
            <i className="fa-solid fa-calendar-days" />
          </div>
        </div>
      </div>
    );
  }
}
