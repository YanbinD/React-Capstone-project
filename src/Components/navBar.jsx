import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="mynavbar"
    >
      <Link to="/home">
        {" "}
        <i className="fa fa-slideshare fa-3x" aria-hidden="true" />{" "}
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
          <NavLink className="nav-item nav-link" to="/counter">
            Counters :)
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
