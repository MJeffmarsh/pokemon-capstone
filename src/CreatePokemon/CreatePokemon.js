import React, { Component } from 'react';
import AppContext from '../Context';
import './CreatePokemon.css';

export class CreatePokemon extends Component {
  static contextType = AppContext;

  handleCancel = () => {
    this.props.history.push('/pokemon');
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addPokemon } = this.context;
    const {
      name,
      heightFt,
      heightIn,
      weight,
      classification,
      description
    } = e.target;
    const type = [1, 2].map(i => e.target[`type-${i}`].value);

    const pokemon = {
      name: name.value,
      heightFt: heightFt.value,
      heightIn: heightIn.value,
      weight: weight.value,
      classification: classification.value,
      description: description.value,
      type: type
    };

    addPokemon(pokemon);

    this.props.history.push('/pokemon');
  };

  render() {
    const { types } = this.context;
    return (
      <div className='create-main'>
        <section>
          <h2>Create a custom Pokemon!</h2>
          <form onSubmit={this.handleSubmit} className='custom-form'>
            <div className='custom-input'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                maxLength='15'
                required
              />
            </div>

            <div className='custom-input'>
              <label htmlFor='type'>Type</label>
              <div className='type'>
                <select name='type-1' id='type-1' required>
                  {types.map(types => (
                    <option key={types.name + '1'} value={types.name}>
                      {types.name}
                    </option>
                  ))}
                </select>

                <select defaultValue='' name='type-2' id='type-2'>
                  <option value=''> -- Type 2 Optional -- </option>
                  {types.map(types => (
                    <option key={types.name + '2'} value={types.name}>
                      {types.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='custom-input '>
              <label htmlFor='height'>Height</label>
              <div className='height'>
                <input
                  type='text'
                  name='heightFt'
                  id='heightFt'
                  maxLength={4}
                  max={9999}
                  required
                />
                <span>ft</span>
                <input
                  type='text'
                  name='heightIn'
                  id='heightIn'
                  max={11}
                  maxLength={2}
                  required
                />
                <span>in</span>
              </div>
            </div>

            <div className='custom-input'>
              <label htmlFor='weight'>Weight</label>
              <div className='weight'>
                <input type='text' name='weight' id='weight' maxLength='5' />
                <span>lbs</span>
              </div>
            </div>

            <div className='custom-input'>
              <label htmlFor='classification'>Classification</label>
              <input
                type='text'
                name='classification'
                id='classification'
                maxLength='25'
                required
              />
            </div>

            <div className='custom-input'>
              <label htmlFor='description'>Description</label>
              <textarea name='description' id='description' maxLength='250' />
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

export default CreatePokemon;
