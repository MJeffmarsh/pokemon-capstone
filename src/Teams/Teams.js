import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';
import AppContext from '../Context';

export class Teams extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div className='main'>
        <header>
          <h1>Build a team</h1>
        </header>
        <section>
          <h2>Click here to build a Team</h2>
          <button tag={Link} to='/build-team'>
            Build
          </button>
        </section>
        <section>
          <h2>Team List</h2>
          <div className='team_list'>{this.context.teams.length}</div>
        </section>
      </div>
    );
  }
}

export default Teams;
