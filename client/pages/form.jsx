import React from 'react';
// import ReactDom from 'react-dom'

export default class Form extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     name: '',
  //     route: parseRoute(window.location.hash)
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  render() {
    return (
      <div className="form-wrapper">
        <form>
          <div className="d-flex justify-content-center form-group">
            <label htmlFor="new-artist">Add a new artist.</label>
          </div>
          <div className="d-flex justify-content-center form-group">
            <input name="new-artist" type="text" className="form-control col-4" id="new-artist" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn new-artist-submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
