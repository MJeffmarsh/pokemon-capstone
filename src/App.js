import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import STORE from './store';
import AppContext from './Context';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      pokemon: [],
      addTeam: team => {
        this.setState({ teams: [...this.state.teams, team] });
      }
    };
  }

  componentDidMount() {
    this.setState({ teams: [...STORE.teams], pokemon: [...STORE.pokemon] });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <main className='App'>
            <Route exact path='/' component={Home} />
          </main>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
