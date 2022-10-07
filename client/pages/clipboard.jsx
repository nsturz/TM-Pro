import React from 'react';

export default class ClipBoard extends React.Component {
  render() {
    return (
      <div className="h-100 clipboard-container col-12 ">
        <a className="d-block text-center clipboard-links">NEW ARTIST</a>
        <a className="d-block text-center clipboard-links">NEW TOUR</a>
        <a className="d-block text-center clipboard-links">NEW TOUR DATE</a>
        <a className="d-block text-center clipboard-links">EDIT A DATE</a>
      </div>
    );
  }
}
