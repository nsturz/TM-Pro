import React from 'react';

export default class Instructions extends React.Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center d-flex">
          <div className="col-12 mt-5">
            <h2 className="poppins-dark text-center">Welcome to Tour Manager Pro!</h2>
            <p className="text-center">Below are some instructions on how to use this application 😁</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <h4 className="text-center">View all show details on the Dashboard.</h4>
        </div>
        <div className="p-2">
          <div className="row d-flex flex-wrap">
            <div className="col-lg-7 col-10 mt-3">
              <img className="dashboard-gif" src="../images/dashboard.gif" alt="" />
            </div>
            <div className="col-lg-5 col-12 mt-3">
              <p className="instructions-text">This is the <b className="font-weight-bold font-italic">dashboard</b> where you can view  all the information about one show including:
                venue info, the schedule for that day, details about promoters and show specifics, as well as routing information
                about the next trip. 🚐 📍
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 mb-5 mt-5">
          <h4 className="text-dark text-center">Select dates to view show details.</h4>
        </div>
        <div className="row d-flex justify-content-center mt-5 light-grey">
          <div className="col-lg-7 col-10 mt-3">
            <img className="dashboard-gif"src="../images/select-date.gif" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
