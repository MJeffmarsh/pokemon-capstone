import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonPage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Custom Pokemon</h1>
        </header>
        <section>
          <h2>Click here to create a Pokemon!</h2>
          <button tag={Link} to='/create-pokemon'>
            Create
          </button>
        </section>
        <section>
          <h2>Custom Pokemon List</h2>
          <div className='custom_list'></div>
        </section>
      </div>
    );
  }
}

export default PokemonPage;
