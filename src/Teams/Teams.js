import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Teams.css';
import AppContext from '../Context';

export class Teams extends Component {
  static contextType = AppContext;

  render() {
    const { teams } = this.context;
    return (
      <>
        <Nav />
        <div className='main'>
          <header>
            <h1>Build a team</h1>
          </header>
          <section>
            <h2>Click here to build a Team</h2>
            <Link to={'/build-team'}>
              <button>Build</button>
            </Link>
          </section>
          <section>
            <h2>Team List</h2>
            <div className='team_list'>
              {teams.map(team => (
                <div className='team'>
                  <ul>
                    <li>{team.name}</li>
                    <li>{team.slots}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Teams;
