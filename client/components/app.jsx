import React from 'react';
import NewArtistForm from './new-artist-form';
import Footer from './footer';
import Dashboard from '../pages/dashboard';
import parseRoute from '../lib/parse-route';
import ClipBoard from '../pages/clipboard';
import TourDates from '../pages/tourdates';
import NewTourDate from './new-tour-date';
import EditTourDate from './edit-tour-date';
import RouteOverview from '../pages/route-overview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      tourDates: [],
      route: parseRoute(window.location.hash)
    };
    this.addName = this.addName.bind(this);
    this.addTourDate = this.addTourDate.bind(this);
    this.deleteTourDate = this.deleteTourDate.bind(this);
    this.editTourDate = this.editTourDate.bind(this);
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
    if (route.path === 'clipboard') {
      return <ClipBoard />;
    }
    if (route.path === 'calendar') {
      return <TourDates tourDates={ this.state.tourDates } onSubmit={this.deleteTourDate} />;
    }
    if (route.path === 'new-date') {
      return <NewTourDate artists={this.state.artists}
      onSubmit={ this.addTourDate }/>;
    }
    if (route.path === 'edit-date') {
      return <EditTourDate tourDates={this.state.tourDates} onSubmit={ this.editTourDate }/>;
    }
    if (route.path === 'route-overview') {
      return <RouteOverview tourDates={this.state.tourDates} />;
    }
    return <Dashboard tourDates={this.state.tourDates} />;
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

  addTourDate(newTourDate) {
    fetch('/api/new-date', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTourDate)
    })
      .then(response => response.json())
      .then(newTourDate => {
        const tourDatesCopy = [...this.state.tourDates];
        tourDatesCopy.push(newTourDate);
        this.setState({
          tourDates: tourDatesCopy
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

  editTourDate(editedTourDate, showId) {
    fetch(`/api/edit-date/${showId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedTourDate)
    })
      .then(() => {
        const newTourDates = [...this.state.tourDates];
        for (let i = 0; i < newTourDates.length; i++) {
          if (newTourDates[i].showId === showId) {
            newTourDates.splice(i, 1, editedTourDate);
          }
        } this.setState({ tourDates: newTourDates });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}
