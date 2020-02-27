import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context';
import Nav from '../Nav/Nav';
import './PokemonPage.css';

class PokemonPage extends Component {
  static contextType = AppContext;
  render() {
    const { pokemon } = this.context;
    return (
      <>
        <Nav />
        <div className='main'>
          <header>
            <h1>Custom Pokemon</h1>
          </header>
          <section>
            <h2>Click here to create a Pokemon!</h2>
            <Link to={'/create-pokemon'}>
              <button>Create</button>
            </Link>
          </section>
          <section>
            <h2>Custom Pokemon List</h2>
            <div className='custom_list'>
              {pokemon.map((mon, i) => (
                <div
                  key={`pokemonindex-${i}-name${mon.name}`}
                  className='pokemon_info'
                >
                  <ul>
                    <li>{mon.name}</li>
                    <li>
                      {mon.type.map((types, j) => (
                        <span key={`pokemon-${mon.id}-monindex-${j}`}>
                          {types}{' '}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default PokemonPage;
