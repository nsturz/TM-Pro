// import React from 'react';

// export default class Dashboard extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       show:'',
//       notes:'',
//       contacts:''
//     };

//   };

//   componentDidMount(){
//     fetch('/api/shows/1')
//     .then(res => res.json())
//     .then(show => this.setState({show}))

//     fetch('api/notes/1')
//     .then(res => res.json())
//     .then(notes => this.setState({ notes }))

//     fetch('api/contacts/1')
//     .then(res => res.json())
//     .then(contacts => this.setState({ contacts }))

//   }

//   render() {
//     // if(!this.state.product){
//     //   return null;
//     // }
//     const { city, date, line1, state, venueName, phone  } = this.state.show;
//     const { details } = this.state.notes;
//     const { email, name, contactPhone } = this.state.contacts;
//     return (
//       <div className="container dashboard-container d-flex flex-wrap">
//         <div className="venues-notes-wrapper col-sm-3 col-12 ">
//           <div className="venues col-12 h-50 info" id="venue">
//             <h6>VENUE</h6>
//             <i className="fa-solid fa-location-dot" />
//             <p>{venueName}</p>
//             <p>{line1}</p>
//             <p>{city}, {state}</p>
//             <p>{phone}</p>
//           </div>
//           <div className="notes col-12 h-50 info" id="notes">
//             <h6>NOTES</h6>
//             <i className="fa-solid fa-clipboard-list" />
//             <p>{ details }</p>
//           </div>
//         </div>
//         <div className="schedule-wrapper col-sm-3 col-12  " id="schedule">
//           <div className=" schedules col-12 h-100 info">
//             <h6>SCHEDULE</h6>
//             <i className="fa-solid fa-clock" />
//             {/* <ul>
//               <li>8:00PM - 11:00AM - TRAVEL</li>
//               <li>4:00PM LOAD IN</li>
//               <li>5:00PM WILDER SOUNDCHECK</li>
//               <li>6:00PM SUPPORT SOUNDCHECK</li>
//               <li>7:00PM DOORS</li>
//               <li>8:00PM SUPPORT 1</li>
//               <li>8:30PM  CHANGEOVER</li>
//               <li>8:45PM SUPPORT 2</li>
//               <li>9:15PM CHANGEOVER</li>
//               <li>9:30PM - END  WILDER</li>
//               <li>11:00PM CURFEW</li>
//               <li>12:00AM - DEPART</li>
//             </ul> */}
//           </div>
//         </div>
//         <div className="contacts-wrapper col-sm-3 col-12" id="contacts">
//           <div className="contacts col-12 h-50 info">
//             <h6>CONTACTS</h6>
//             <i className="fa-solid fa-phone" />
//             <p>{ email } </p>
//             <p>{ name }</p>
//             <p>{ contactPhone }</p>
//           </div>
//         </div>
//         <div className="dates-wrapper col-sm-3 col-12" id="dates">
//           <div className="dates col-12 h-100 info">
//             <h6>DATES</h6>
//             <i className="fa-solid fa-calendar-days" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
