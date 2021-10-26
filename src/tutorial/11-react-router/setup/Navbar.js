import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  //instead of using traditional link we use the link from react router dom which takes a unique prop called to
  return (
    <nav>
      <ul>
        <li>
          <button className="btn">
            <Link to="/people">People</Link>
          </button>
        </li>
        <li>
          <button className="btn">
            <Link to="/about">About</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
