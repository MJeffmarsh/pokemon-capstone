import React, { Component } from 'react';
import AppContext from '../Context';
import './CreatePokemon.css';

export class CreatePokemon extends Component {
  static contextType = AppContext;

  handleCancel = () => {
    this.props.history.push('/pokemon');
  };

  render() {
    const { types } = this.context;
    return (
      <div className='create-main'>
        <section>
          <h2>Create a custom Pokemon!</h2>
          <form className='custom-form'>
            <div className='custom-input'>
              <label for='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                maxlength='15'
                required
              />
            </div>

            <div className='custom-input'>
              <label htmlfor='type'>Type</label>
              <div className='type'>
                <select name='type1' id='type' required>
                  {types.map(types => (
                    <option value={types.id}>{types.name}</option>
                  ))}
                </select>

                <select name='type2' id='type'>
                  <option disabled selected value>
                    {' '}
                    -- Type 2 Optional --{' '}
                  </option>
                  {types.map(types => (
                    <option value={types.id}>{types.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className='custom-input '>
              <label htmlfor='height'>Height</label>
              <div class='height'>
                <input
                  type='text'
                  name='height'
                  id='height'
                  maxlength='3'
                  required
                />
                <span>ft</span>
                <input
                  type='text'
                  name='height'
                  id='height'
                  maxlength='2'
                  required
                />
                <span>in</span>
              </div>
            </div>

            <div className='custom-input'>
              <label htmlfor='weight'>Weight</label>
              <div class='weight'>
                <input type='text' name='weight' id='weight' maxlength='5' />
                <span>lbs</span>
              </div>
            </div>

            <div className='custom-input'>
              <label htmlfor='classification'>Classification</label>
              <input
                type='text'
                name='classification'
                id='classification'
                maxlength='25'
                required
              />
            </div>

            <div className='custom-input'>
              <label htmlfor='content'>Description</label>
              <textarea name='content' id='content' maxlength='250' />
            </div>

            <button>Create</button>
            <button type='button' onClick={this.handleCancel}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default CreatePokemon;
