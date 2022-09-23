// import React from 'react';
// import Home from '../pages/home';
// import Form from './form';
// import Footer from './footer';
// import Dashboard from '../pages/dashboard';
// import NavBar from './navbar';

// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       artists: [],
//       //route: parseRoute(window.location.hash)
//     }
//     this.addName = this.addName.bind(this);
//   }

//   // componentDidMount(){
//   //   window.addEventListener('haschchange', event =>{
//   //     this.setState({
//   //       route: parseRoute(window.location.hash)
//   //     })
//   //   })
//   // }

//   renderPage(){
//     const { route } = this.state;
//     if(route.path ===''){
//       return <Dashboard />;
//     }
//     if(route.path ==='form'){
//       return <Form />;
//     }
//     return <NotFound />;
//   }

//   addName(newArtist){

//     fetch('/api/artists',{
//       method: 'POST',
//       headers:{
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newArtist)
//     })
//     .then(response => response.json())
//     .then(name =>{
//       this.setState({
//         name: this.state.name.concat(artists)
//       })
//     })
//     .catch(console.error)
//   }
//   render() {
//     return(
//       <div>
//         <NavBar />
//         <Dashboard />
//         {/* <Form onSubmit={this.addName} /> */}
//         <Footer />
//       </div>
//     )
//   }
// }
