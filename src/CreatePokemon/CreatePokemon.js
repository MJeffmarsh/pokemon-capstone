import React, { Component } from 'react';
import './CreatePokemon.css';

export class CreatePokemon extends Component {
  render() {
    return (
      <div className='main'>
        <section>
          <h2>Create a custom Pokemon!</h2>
          <form>
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
              <label for='type'>Type</label>
              <div class='type'>
                <select name='type' id='type' required></select>

                <select name='type' id='type'></select>
              </div>
            </div>

            <div className='custom-input '>
              <label for='height'>Height</label>
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
              <label for='weight'>Weight</label>
              <div class='weight'>
                <input type='text' name='weight' id='weight' maxlength='5' />
                <span>lbs</span>
              </div>
            </div>

            <div className='custom-input'>
              <label for='classification'>Classification</label>
              <input
                type='text'
                name='classification'
                id='classification'
                maxlength='25'
                required
              />
            </div>

            <div className='custom-input'>
              <label for='content'>Description</label>
              <textarea name='content' id='content' maxlength='250' />
            </div>

            <button>Create</button>
            <button>Cancel</button>
          </form>
        </section>
      </div>
    );
  }
}

export default CreatePokemon;
