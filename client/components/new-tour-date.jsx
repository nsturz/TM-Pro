import React from 'react';

export default class NewTourDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
      scheduleEvent1: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent2: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent3: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent4: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent5: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent6: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent7: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent8: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent9: 'row justify-content-center mt-3 mb-3 d-none',
      scheduleEvent10: 'row justify-content-center mt-3 mb-3 d-none'
    };

    this.decrement = this.decrement.bind(this);
    this.addScheduleEvent = this.addScheduleEvent.bind(this);
  }

  decrement() {
    this.setState({
      click: this.state.click - 1
    });
  }

  // see progress.txt 10/11 👇🏼
  addScheduleEvent() {
    const click = this.state.click;
    const active = 'row justify-content-center mt-3 mb-3';
    this.setState({
      click: this.state.click + 1
    });
    if (click === 1) {
      this.setState({
        scheduleEvent1: active
      });
    } if (click === 2) {
      this.setState({
        scheduleEvent2: active
      });
    } if (click === 3) {
      this.setState({
        scheduleEvent3: active
      });
    } if (click === 4) {
      this.setState({
        scheduleEvent4: active
      });
    } if (click === 5) {
      this.setState({
        scheduleEvent5: active
      });
    } if (click === 6) {
      this.setState({
        scheduleEvent6: active
      });
    } if (click === 7) {
      this.setState({
        scheduleEvent7: active
      });
    } if (click === 8) {
      this.setState({
        scheduleEvent8: active
      });
    } if (click === 9) {
      this.setState({
        scheduleEvent9: active
      });
    } if (click === 10) {
      this.setState({
        scheduleEvent10: active
      });
    }
  }

  // removeScheduleEvent(event){
  //   const inactive = 'row justify-content-center mt-3 mb-3 d-none';

  // }

  render() {
    return (
      <div className="container new-tour-date-form  d-flex justify-content-center flex-wrap">
        <form action="" className="row">
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
            <label htmlFor="" className=" col-12 text-center mt-3 mb-3">SCHEDULE</label>
            <div className={this.state.scheduleEvent1} id="schedule-event-1">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent2} id="schedule-event-2">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent3} id="schedule-event-3">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent4} id="schedule-event-4">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent5} id="schedule-event-5">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent6} id="schedule-event-6">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent7} id="schedule-event-7">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent8} id="schedule-event-8">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent9} id="schedule-event-9">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <div className={this.state.scheduleEvent10} id="schedule-event-10">
              <div className="col-5">
                <label htmlFor="start-time" className="text-center col-12">Start Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <div className="col-5">
                <label htmlFor="end-time" className="text-center col-12">End Time</label>
                <input type="time" className="form-control h-50" />
              </div>
              <a href="" className="col-1 d-flex align-items-center">
                <i className="fa-solid fa-x" />
              </a>
              <div className="col-12 mt-3">
                <div className="row d-flex justify-content-center">
                  <label htmlFor="details" className="text-center col-12">Details</label>
                  <input type="text" className="form-control col-8 h-50" />
                </div>
              </div>
            </div>
            <button className=" add-schedule-event-btn col-12 d-flex justify-content-center mt-3 bg-transparent border-0">
              <i className="fa-solid fa-plus text-white" onClick={ this.addScheduleEvent } />
            </button>
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
          <div className="col-12 mt-3 mb-3">
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn new-artist-submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
