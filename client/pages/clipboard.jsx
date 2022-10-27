import React from 'react';

export default class ClipBoard extends React.Component {
  render() {
    return (
      <div className="clipboard-container m-5">
        <a href="#new-artist-form" className="d-block text-center clipboard-links m-5">NEW ARTIST</a>
        <a href="" className="d-block text-center clipboard-links m-5">NEW TOUR</a>
        <a href="#new-date" className="d-block text-center clipboard-links m-5">NEW DATE</a>
        <a href="" className="d-block text-center clipboard-links m-5">EDIT DATE</a>
      </div>
    );
  }
}
