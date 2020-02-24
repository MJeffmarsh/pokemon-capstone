import React, { Component } from 'react';

export class PokemonCard extends Component {
  render() {
    return (
      <div className='main'>
        <div className='container'>
          <div className='card'>
            <div className='type'>
              <h2>Type</h2>
            </div>
            <div className='size'>
              <h2>Height</h2>
              <h3>5ft 8in</h3>
              <h2>Weight</h2>
              <h3>145lbs</h3>
            </div>
            <div className='description'>
              <h3>Pokemon Classification</h3>
              <span>
                This is where the Pokemon description will go. This is just a
                little fun fact about the pokemon
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
