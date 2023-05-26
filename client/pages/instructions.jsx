import React from 'react';

export default class Instructions extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center d-flex mb-5">
          <div className="col-12 mt-5">
            <h2 className="poppins-dark text-center">Welcome to Tour Manager Pro!</h2>
            <p className="text-center">
              This is a full stack application made for touring artists to
              keep track of their information on the road.
            </p>
            <p className='text-center'>Below are instructions on how to use the app. 😁</p>
          </div>
        </div>
        <div className="bg-light pt-3 pb-3 pl-2 pr-2 mb-5">
          <div className="row justify-content-center">
            <h5 >View all show details on the Dashboard.</h5>
          </div>
          <div className="row d-flex flex-wrap mt-4 mb-5">
            <div className="col-lg-7 col-12 mt-3">
              <img className="gif" src="../images/dashboard.gif" alt="" />
            </div>
            <div className="col-lg-5 col-12 mt-5">
              <p className="instructions-text text-center mt-5">This is the <b className="font-weight-bold font-italic">dashboard</b> where you can view  all the information about one show including:
                venue info, the schedule for that day, details about promoters and show specifics, as well as routing information
                about the next trip. 🚐 📍
              </p>
            </div>
          </div>
        </div>
        <div className="col-12  mt-5">
          <h4 className="text-dark text-center">Select dates to view show details.</h4>
        </div>
        <div className="row d-flex fle-wrap mt-4 mb-5">
          <div className="col-lg-5 col-12 mt-5 mb-5">
            <p className="instructions-text text-center mt-5">
              When you select a date as shown above, the page populates,
              showing you all of the relevant details pertaining to that show 📋
            </p>
          </div>
          <div className="col-lg-7 col-12">
            <div className="d-flex justify-content-center">
              <img className="gif" src="../images/select-date.gif" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-light pt-3 pb-3 pl-2 pr-2 mb-5">
          <div className="col-12 mb-5">
            <h4 className="text-dark text-center">Add new dates or edit existing ones.</h4>
          </div>
          <div className="row d-flex flex-wrap mb-5 mt-5">
            <div className="col-lg-7 col-12 mt-3">
              <img className="gif" src="../images/modals.gif" alt="" />
            </div>
            <div className="col-lg-5 col-12 mt-3">
              <p className="instructions-text text-center">
                Click on the “+” icon to add a new date, or click on the “pen” icon to edit an existing one. 📋

                Note: you can also delete tour dates by clicking the “trash” icon, but this button is disabled for demo purposes. 🙅🏽‍♀️
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex fle-wrap mt-5 mb-5 p-5">
          <div className="col-12 mt-3 mb-3">
            <div className="d-flex justify-content-center">
              <i className="fa-solid fa-check fa-2xl text-success" />
            </div>
          </div>
          <div className="col-12 mt-5">
            <h4 className="text-center">And thats it!</h4>
            <p className="text-center mb-5">Thank you for checking out Tour Manager Pro</p>
            <div className="row d-flex justify-content-center">
              <button className="btn blue-btn">
                <a href="#">Get started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
