import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="people">
            <button className="btn">People</button>
          </Link>
        </li>
        <li>
          <Link to="about">
            <button className="btn">About</button>
          </Link>
        </li>
        <li>
          <Link to="person">
            <button className="btn">People</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
