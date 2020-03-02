import React, { Component } from 'react';
import './PokemonCard.css';
import AppContext from '../Context';

export class PokemonCard extends Component {
  static contextType = AppContext;
  render() {
    const { pokemon = [] } = this.context;
    const { pokemonName } = this.props.match.params;
    const findPokemon = (pokemon, pokemonName) =>
      pokemon.find(mon => mon.name === pokemonName);

    const mon = findPokemon(pokemon, pokemonName) || {
      id: 0,
      name: '',
      type: [],
      heightFt: '',
      weight: '',
      class: '',
      description: ''
    };

    console.log(mon.type);
    return (
      <div className='main'>
        <header>
          <h1>{mon.name}</h1>
        </header>
        <div className='container'>
          <div className='card'>
            <div className='type'>
              <h2>{mon.type.join(' ')}</h2>
            </div>
            <div className='size'>
              <h2>Height</h2>
              <h3>
                {mon.heightFt} ft {mon.heightIn} in
              </h3>
              <h2>Weight</h2>
              <h3>{mon.weight} lbs</h3>
            </div>
            <div className='description'>
              <h3>{mon.classification}</h3>
              <span>{mon.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
