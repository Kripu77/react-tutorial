import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">
            <button className="btn"> About </button>
          </Link>
          <Link to="/">
            <button className="btn"> Home </button>
          </Link>
          <Link to="/people">
            <button className="btn"> People </button>
          </Link>
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
