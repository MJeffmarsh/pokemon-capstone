import React, { Component } from 'react';
import './BuildTeam.css';
import AppContext from '../Context';

export class BuildTeam extends Component {
  static contextType = AppContext;

  handleCancel = () => {
    this.props.history.push('/teams');
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addTeam } = this.context;
    const { name } = e.target;
    const slots = [1, 2, 3, 4, 5, 6].map(i => e.target[`pokemon-${i}`].value);

    const team = {
      name: name.value,
      slots: slots
    };

    addTeam(team);

    this.props.history.push('/teams');
  };

  render() {
    const { pokemon } = this.context;
    return (
      <div className='main'>
        <section>
          <h2>Build a team!</h2>
          <form className='team-form' onSubmit={this.handleSubmit}>
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
              <select name='pokemon-1' required>
                {pokemon.map(pokemon => (
                  <option key={pokemon.id + '1'} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>

              <select defaultValue='' name='pokemon-2'>
                <option key={'option1'} value=''>
                  {' '}
                  -- Slot 2 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option key={pokemon.id + '2'} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>

              <select defaultValue='' name='pokemon-3'>
                <option key={'option3'} value=''>
                  {' '}
                  -- Slot 3 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option key={pokemon.id + '3'} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>

              <select defaultValue='' name='pokemon-4'>
                <option key={'option4'} value=''>
                  {' '}
                  -- Slot 4 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option key={pokemon.id + '4'} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>

              <select defaultValue='' name='pokemon-5'>
                <option key={'option5'} value=''>
                  {' '}
                  -- Slot 5 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option key={pokemon.id + '5'} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
              </select>

              <select defaultValue='' name='pokemon-6'>
                <option key={'option6'} value=''>
                  {' '}
                  -- Slot 6 --{' '}
                </option>
                {pokemon.map(pokemon => (
                  <option key={pokemon.id + '6'} value={pokemon.name}>
                    {pokemon.name}
                  </option>
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
