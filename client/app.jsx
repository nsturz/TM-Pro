// import React from 'react';
// import Home from './pages/home';
// import Form from './pages/form';

// export default class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       artists: []
//     }
//     this.addName = this.addName.bind(this);
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
//         name: this.state.artists.concat(artists)
//       })
//     })
//     .catch(console.error)
//   }
//   render() {
//     return(
//       <div className="container">
//         <Form onSubmit={this.addName} />
//       </div>
//     )
//   }
// }
