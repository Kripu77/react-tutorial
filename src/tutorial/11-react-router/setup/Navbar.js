import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  //instead of using traditional link we use the link from react router dom which takes a unique prop called to
  return (
    <nav>
      <ul>
        <li>
<Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/About"> About</Link>
        </li>
        <li>
          <Link to="/People">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
