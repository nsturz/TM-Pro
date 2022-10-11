import React from 'react';

export default class NewTourDate extends React.Component {
  render() {
    return (
      <div className="container d-flex justify-content-center flex-wrap">
        <form action="" className="new-tour-date-form row">
          <div className="col-12 col-lg-6 form-group mt-3">
            <div className="row justify-content-center">
              <label htmlFor="artist-select-form" className="col-12 text-center">ARTIST</label>
              <select name="artist-select-form" id="" className="form-control col-6">
                <option value="">Select an artist</option>
              </select>
              <label htmlFor="date" className="col-12 text-center mt-3">DATE</label>
              <input name="date" type="date" className="form-control col-6" />
            </div>
            <div className="row justify-content-center mt-3">
              <label htmlFor="city" className="col-12 text-center">LOCATION</label>
              <input name="city" type="text" placeholder="City" className="m-1 form-control col-5" />
              <input name="state" type="text" placeholder='State' className="m-1 form-control col-2" />
              <input name="country" type="text" placeholder='USA' className="m-1 form-control col-2" />
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <label htmlFor="address" className="col-12 text-center">ADDRESS</label>
              <input name="address" type="text" className="form-control col-6" />
            </div>
          </div>
          <div className="col-12 col-lg-6 form-group mt-3">
            <div className="row d-flex justify-content-center">
              <label htmlFor="venue" className="col-12 text-center">VENUE</label>
              <input name="venue" type="text" className="form-control col-6" />
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <label htmlFor="notes" className="col-12 text-center">NOTES</label>
              <textarea name="notes" id="" className="form-control col-8" />
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <label htmlFor="contacts" className="col-12 text-center">CONTACTS</label>
              <textarea name="contacts" id="" className="form-control col-8" />
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn new-artist-submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
