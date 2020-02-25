import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='navMain'>
      <ul>
        <li>
          <Link className='link' to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className='link' to={'/pokemon'}>
            Pokemon
          </Link>
        </li>
        <li>
          <Link className='link' to={'/teams'}>
            Teams
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
