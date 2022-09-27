// import React from 'react';

// export default class Dashboard extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       show:'',
//       notes:'',
//       contacts:'',
//       schedules: [],
//       dates: []
//     };

//   };

//   componentDidMount(){
//     fetch('/api/shows/1')
//     .then(res => res.json())
//     .then(show => this.setState({show}))

//     fetch('api/shows')
//     .then(res => res.json())
//     .then(dates => this.setState({dates}))

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
//     const { dateCity, dateState, dateVenue, showDate} = this.state.dates;

//     console.log('this.state.dates:',this.state.dates)
//     console.log('props.schedules', this.props.schedules)
//     return (
//       <div className="container dashboard-container d-flex flex-wrap mh-100">
//         <h3 className="col-12 mb-5">{ date } - { city }, { state }</h3>
//         <div className="venues-notes-wrapper col-sm-3 col-12 mh-100">
//           <div className="venues col-12 h-50 info" id="venue">
//             <h6>VENUE</h6>
//             <i className="fa-solid fa-location-dot" />
//             <div className="row d-block">
//               <hr className="w-100" />
//               <p className="text-center lead">{venueName}</p>
//               <p className="text-center lead">{line1}</p>
//               <p className="text-center lead">{city}, {state}</p>
//               <p className="text-center lead ">{phone}</p>
//             </div>
//           </div>
//           <div className="notes col-12 h-50 info" id="notes">
//             <h6>NOTES</h6>
//             <i className="fa-solid fa-clipboard-list" />
//             <div className="row">
//               <hr className="w-100" />
//               <pre className="pl-3">{details}</pre>
//             </div>
//           </div>
//         </div>
//         <div className="schedule-wrapper col-sm-3 col-12 mh-100 " id="schedule">
//           <div className=" schedules col-12 h-100 info">
//             <h6 className="pl-2">SCHEDULE</h6>
//             <i className="fa-solid fa-clock" />
//             <hr className="w-100" />
//             <ul className="pl-2">
//               {
//                 this.state.schedules.map(event => {
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
//             <h6 className="pl-2">CONTACTS</h6>
//             <i className="fa-solid fa-phone" />
//             <hr className="w-100" />
//             <p className="pl-2">{ email } </p>
//             <p className="pl-2">{ name }</p>
//             <p className="pl-2">{ contactPhone }</p>
//           </div>
//         </div>
//         <div className="dates-wrapper col-sm-3 col-12" id="dates">
//           <div className=" dates col-12 mh-100 info m-0">
//             <h6>DATES</h6>
//             <i className="fa-solid fa-calendar-days" />
//             <ul className="dates-list">
//               {
//                 this.state.dates.map(event => {
//                   return (
//                     <li className="row date-wrapper">
//                       <p className="date col-6">{event.showDate}</p>
//                       <p className="city"><b>{event.dateCity},{event.dateState} </b><br />{event.dateVenue}</p>
//                     </li>
//                   )
//                 })
//               }
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
