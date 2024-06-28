import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
        <nav>
        <ul>
          <li>
            <p><Link to="/home">Home</Link></p>
          </li>
          <li>
            <p><Link to="/about">About</Link></p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;