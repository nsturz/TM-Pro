import React from 'react';
// import Home from '../pages/home';
import Form from './form';
import Footer from './footer';
import Dashboard from '../pages/dashboard';
import NavBar from './navbar';
import parseRoute from '../lib/parse-route';
import NotFound from '../pages/not-found';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      route: parseRoute(window.location.hash)
    };
    this.addName = this.addName.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      // const showId = route.params.get('showId')
      return <Dashboard />;
    }
    if (route.path === 'form') {
      return <Form onSubmit={ this.addName }/>;
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
