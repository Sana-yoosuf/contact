import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-5" to="/">
         
          Private Contact
        </Link>
      </div>

      <ul className="navbar-nav mx-5">
        <li className="nav-item">
          <Link className="nav-link" to='/'>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/favourite'>
            Favourite
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
