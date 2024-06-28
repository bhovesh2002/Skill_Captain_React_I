import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
        <nav>
        <ul>
          <li>
            <p><Link to="/">Home</Link></p>
          </li>
          <li>
            <p><Link to="/todo">Todo App</Link></p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;