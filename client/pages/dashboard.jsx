// import React from 'react';

// export default class Dashboard extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       show:'',
//       notes:'',
//       contacts:'',
//       schedules: []
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

//     fetch('api/schedules')
//     .then(res => res.json())
//     .then(schedules => this.setState({ schedules }))

//   }
//   render() {
//     // if(!this.state.product){
//     //   return null;
//     // }

//     const { city, date, line1, state, venueName, phone  } = this.state.show;
//     const { details } = this.state.notes;
//     const { email, name, contactPhone } = this.state.contacts;
//     const { endTime, startTime, scheduleDetails } = this.state.schedules;
//     console.log('type of this.state.schedules:',this.state.schedules[0])
//     console.log('props.schedules', this.props.schedules)
//     return (
//       <div className="container dashboard-container d-flex flex-wrap mh-100">
//         <div className="venues-notes-wrapper col-sm-3 col-12 mh-100">
//           <div className="venues col-12 h-50 info" id="venue">
//             <h6>VENUE</h6>
//             <i className="fa-solid fa-location-dot" />
//             <div className="row d-block">
//               <hr className="col-11" />
//               <p className="text-center lead">{venueName}</p>
//               <p className="text-center lead">{line1}</p>
//               <p className="text-center lead">{city}, {state}</p>
//               <p className="text-center lead ">{phone}</p>
//             </div>
//           </div>
//           <div className="notes col-12 h-50 info" id="notes">
//             <h6>NOTES</h6>
//             <i className="fa-solid fa-clipboard-list" />
//               <pre>{ details }</pre>
//           </div>
//         </div>
//         <div className="schedule-wrapper col-sm-3 col-12 mh-100 " id="schedule">
//           <div className=" schedules col-12 h-100 info">
//             <h6>SCHEDULE</h6>
//             <i className="fa-solid fa-clock" />
//             <ul>
//               {
//                 this.state.schedules.map(event => {
//                   console.log('EVENT:', event);
//                   return (
//                     <li>{event.startTime} - {event.endTime} {event.scheduleDetails}</li>
//                   )
//                 })
//               }
//             </ul>

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
//           <div className="dates col-12 h-100 info m-0">
//             <h6>DATES</h6>
//             <i className="fa-solid fa-calendar-days" />
//               <div className="row date-wrapper">
//                 <hr className="col-11" />
//                 <p className="date col-5">{date}</p>
//                 <p className="city"><b>{city},{state} </b><br />{ venueName }</p>
//               </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
