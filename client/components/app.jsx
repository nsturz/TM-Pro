import React from 'react';
// import Home from '../pages/home';
import NewArtistForm from './new-artist-form';
import Footer from './footer';
import Dashboard from '../pages/dashboard';
import NavBar from './navbar';
import parseRoute from '../lib/parse-route';
import NotFound from '../pages/not-found';
import ClipBoard from '../pages/clipboard';
import TourDates from '../pages/tourdates';
import NewTourDate from './new-tour-date';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      // addresses: [],
      route: parseRoute(window.location.hash)
    };
    this.addName = this.addName.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener('hashchange', event => {
  //     this.setState({
  //       route: parseRoute(window.location.hash)
  //     });
  //   });

  //   fetch('/api/artists')
  //     .then(res => res.json())
  //     .then(artists => artists.map(artist => {
  //       this.setState({
  //         artists: artists
  //       })
  //     }))
  // }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Dashboard />;
    }
    if (route.path === 'new-artist-form') {
      return <NewArtistForm onSubmit={ this.addName }/>;
    }
    if (route.path === 'clipboard') {
      return <ClipBoard />;
    }
    if (route.path === 'calendar') {
      return <TourDates />;
    }
    if (route.path === 'new-tour-date') {
      return <NewTourDate artists={this.state.artists}
      // onSubmit={ this.addTourDate}
      />;
    }
    return <NotFound />;
  }

  addName(newArtist) {
    fetch('/api/artists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArtist)
    })
      .then(response => response.json())
      .then(name => {
        this.setState({
          name: this.state.name.concat(name)
        });
      })
      .catch(console.error);
  }
  // need to finish this function after we create the NewTourDate form 👇🏼
  // addAddress(newAddress){
  //   fetch('/api/addresses', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newAddress)
  //   })
  //     .then(response => response.json())
  //     .then(name => {
  //       this.setState({
  //         line1: this.state.name.concat(line1),
  //         city: this.state.city.concat(city),
  //         state: this.state.state.concat(state),
  //         country: this.state.country.concat(country)
  //       });
  //     })
  //     .catch(console.error);
  // }

  render() {

    return (
      <div>
        <NavBar artists={this.state.artists} />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}
