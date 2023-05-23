import React from 'react';
import NewArtistForm from './new-artist-form';
import Dashboard from '../pages/dashboard';
import parseRoute from '../lib/parse-route';
import TourDates from '../pages/tourdates';
import NavBar from './navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      tourDates: [],
      route: parseRoute(window.location.hash)
    };
    this.addName = this.addName.bind(this);
    this.deleteTourDate = this.deleteTourDate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });

    fetch('/api/artists')
      .then(res => res.json())
      .then(artists => artists.map(artist => this.setState({ artists })));

    fetch('api/shows')
      .then(res => res.json())
      .then(tourDates => this.setState({ tourDates }));
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'new-artist-form') {
      return <NewArtistForm onSubmit={ this.addName }/>;
    }
    if (route.path === 'calendar') {
      return <TourDates tourDates={ this.state.tourDates } onSubmit={this.deleteTourDate} />;
    }
    return <Dashboard artists={this.state.artists} />;
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

  deleteTourDate(selectedDate) {
    fetch('/api/delete-date', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedDate)
    })
      .then(() => {
        const newTourDates = [...this.state.tourDates];
        for (let i = 0; i < newTourDates.length; i++) {
          if (newTourDates[i].showId === selectedDate.showId) {
            newTourDates.splice(i, 1);
          }
        } this.setState({ tourDates: newTourDates });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.renderPage()}
      </div>
    );
  }
}
