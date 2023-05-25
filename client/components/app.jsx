import React from 'react';
import Dashboard from '../pages/dashboard';
import NavBar from './navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      tourDates: []
    };
    this.addName = this.addName.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('hashchange', event => {
    //   this.setState({
    //     route: parseRoute(window.location.hash)
    //   });
    // });

    fetch('/api/artists')
      .then(res => res.json())
      .then(artists => artists.map(artist => this.setState({ artists })));

    fetch('api/shows')
      .then(res => res.json())
      .then(tourDates => this.setState({ tourDates }));
  }

  renderPage() {
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

  render() {
    return (
      <div>
        <NavBar />
        {this.renderPage()}
      </div>
    );
  }
}
