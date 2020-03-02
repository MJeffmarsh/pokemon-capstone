import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home/Home';
import PokemonPage from './PokemonPage/PokemonPage';
import Teams from './Teams/Teams';

import PokemonCard from './PokemonCard/PokemonCard';
import CreatePokemon from './CreatePokemon/CreatePokemon';
import BuildTeam from './BuildTeam/BuildTeam';

import STORE from './store';
import AppContext from './Context';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      pokemon: [],
      types: [],
      addTeam: team => {
        this.setState({ teams: [...this.state.teams, team] });
      },
      addPokemon: pokemon => {
        this.setState({ pokemon: [...this.state.pokemon, pokemon] });
      }
    };
  }

  componentDidMount() {
    this.setState({
      teams: [...STORE.teams],
      pokemon: [...STORE.pokemon],
      types: [...STORE.types]
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <main className='App'>
            <Route exact path='/' component={Home} />
            <Route path='/pokemon' component={PokemonPage} />
            <Route path='/teams' component={Teams} />
            <Route path='/create-pokemon' component={CreatePokemon} />
            <Route path='/build-team' component={BuildTeam} />
            <Route
              path='/pokemon-card/:pokemonName'
              {...this.props}
              component={PokemonCard}
            />
          </main>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
