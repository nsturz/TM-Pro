// import React from 'react';
// import Home from '../pages/home';
// import Form from './form';
// import Footer from './footer';
// import Dashboard from '../pages/dashboard';
// import NavBar from './navbar';
// import parseRoute from '../lib/parse-route';
// import NotFound from '../pages/not-found';

// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       artists: [],
//       route: parseRoute(window.location.hash)
//     }
//     this.addName = this.addName.bind(this);
//   }

//   componentDidMount(){
//     window.addEventListener('hashchange', event =>{
//       this.setState({
//         route: parseRoute(window.location.hash)
//       })
//     })
//   }
// // at this point, we do not need hash routing but this works so far!!! 9/23/22
//   renderPage(){
//     const { route } = this.state;
//     if(route.path ===''){
//       return <Dashboard />;
//     }
//      if(route.path ==='form'){
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
//         <NavBar artists={this.state.artists} />
//         {/* {this.renderPage()} */}
//         <NotFound />
//         <Footer />
//       </div>
//     )
//   }
// }
