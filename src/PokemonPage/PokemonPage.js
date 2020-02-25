import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

class PokemonPage extends Component {
  render() {
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
            <div className='custom_list'></div>
          </section>
        </div>
      </>
    );
  }
}

export default PokemonPage;
