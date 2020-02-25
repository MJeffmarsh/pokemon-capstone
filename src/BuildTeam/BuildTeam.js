import React, { Component } from 'react';
import './BuildTeam.css';
import AppContext from '../Context';

export class BuildTeam extends Component {
  static contextType = AppContext;
  render() {
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
                <option value='pokemon1'>Pokemon 1</option>
                <option value='pokemon2'>Pokemon 2</option>
                <option value='pokemon3'>Pokemon 3</option>
                <option value='pokemon4'>Pokemon 4</option>
                <option value='pokemon5'>Pokemon 5</option>
                <option value='pokemon6'>Pokemon 6</option>
              </select>

              <select>
                <option value='empty'>Empty</option>
                <option value='pokemon1'>Pokemon 1</option>
                <option value='pokemon2'>Pokemon 2</option>
                <option value='pokemon3'>Pokemon 3</option>
                <option value='pokemon4'>Pokemon 4</option>
                <option value='pokemon5'>Pokemon 5</option>
                <option value='pokemon6'>Pokemon 6</option>
              </select>

              <select>
                <option value='empty'>Empty</option>
                <option value='pokemon1'>Pokemon 1</option>
                <option value='pokemon2'>Pokemon 2</option>
                <option value='pokemon3'>Pokemon 3</option>
                <option value='pokemon4'>Pokemon 4</option>
                <option value='pokemon5'>Pokemon 5</option>
                <option value='pokemon6'>Pokemon 6</option>
              </select>

              <select>
                <option value='empty'>Empty</option>
                <option value='pokemon1'>Pokemon 1</option>
                <option value='pokemon2'>Pokemon 2</option>
                <option value='pokemon3'>Pokemon 3</option>
                <option value='pokemon4'>Pokemon 4</option>
                <option value='pokemon5'>Pokemon 5</option>
                <option value='pokemon6'>Pokemon 6</option>
              </select>

              <select>
                <option value='empty'>Empty</option>
                <option value='pokemon1'>Pokemon 1</option>
                <option value='pokemon2'>Pokemon 2</option>
                <option value='pokemon3'>Pokemon 3</option>
                <option value='pokemon4'>Pokemon 4</option>
                <option value='pokemon5'>Pokemon 5</option>
                <option value='pokemon6'>Pokemon 6</option>
              </select>

              <select>
                <option value='empty'>Empty</option>
                <option value='pokemon1'>Pokemon 1</option>
                <option value='pokemon2'>Pokemon 2</option>
                <option value='pokemon3'>Pokemon 3</option>
                <option value='pokemon4'>Pokemon 4</option>
                <option value='pokemon5'>Pokemon 5</option>
                <option value='pokemon6'>Pokemon 6</option>
              </select>
            </div>
            <button>Create</button>
            <button>Cancel</button>
          </form>
        </section>
      </div>
    );
  }
}

export default BuildTeam;
