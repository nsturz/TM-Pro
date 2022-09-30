import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found d-flex justify-content-center flex-wrap">
        <h2 className="text-center col-12">
          Not Found
        </h2>
        <div>
          <a href="#" className="col-12 return-dashboard">RETURN TO DASHBOARD</a>
        </div>
      </div>
    );
  }
}
