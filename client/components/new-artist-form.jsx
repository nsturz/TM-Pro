import React from 'react';

export default class NewArtistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newArtist = {
      name: this.state.name
    };
    this.props.onSubmit(newArtist);
    this.setState({
      name: ''
    });
    document.getElementById('new-artist-form').reset();
  }

  render() {
    return (
      <div className="d-flex justify-content-center form-wrapper">
        <form
          className="d-flex justify-content-center align-self-center align-items-center flex-column mb-5"
          onSubmit={ this.handleSubmit} id="new-artist-form" >
          <div className="form-group mt-5">
            <label htmlFor="new-artist">Add a new artist.</label>
          </div>
          <div className="form-group">
            <input
            name="new-artist"
            type="text"
            className="form-control col-12"
            id="new-artist"
            onChange={this.handleChange}
            required/>
          </div>
          <div className="">
            <button type="submit" className="btn new-artist-submit mb-5">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
