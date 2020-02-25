import React, { Component } from 'react';
import './BuildTeam.css';
import AppContext from '../Context';

export class BuildTeam extends Component {
  static contextType = AppContext;

  handleCancel = () => {
    this.props.history.push('/teams');
  };

  handleSubmit = e => {};

  render() {
    const { pokemon } = this.context;
    return (
      <div className='main'>
        <section>
          <h2>Build a team!</h2>
          <form>
            <div className='custom-input'>
              <label hmtlfor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                maxLength='20'
                required
              />
            </div>

            <div className='custom-input'>
              <select required>
                {pokemon.map(pokemon => (
                  <option value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>

              <select>
                <option disabled selected value>
                  {' '}
                  -- Slot 2 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>

              <select>
                <option disabled selected value>
                  {' '}
                  -- Slot 3 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>

              <select>
                <option disabled selected value>
                  {' '}
                  -- Slot 4 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>

              <select>
                <option disabled selected value>
                  {' '}
                  -- Slot 5 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>

              <select>
                <option disabled selected value>
                  {' '}
                  -- Slot 6 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>
            </div>

            <button type='submit'>Create</button>
            <button type='button' onClick={this.handleCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default BuildTeam;
