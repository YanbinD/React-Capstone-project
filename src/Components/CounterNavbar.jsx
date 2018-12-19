import React, { Component } from "react";

// for stateless component, remove the this. before props
// and pass props as parameter
// React will pass the prop object as an argument to this function at runtime

const CounterNavBar = ({ totalCounter, onReset, onAdd }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Counters{" "}
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a onClick={onReset} className="nav-item nav-link" href="#">
            Reset
          </a>
          <a onClick={onAdd} className="nav-item nav-link" href="#">
            Add Counter
          </a>
          <a className="nav-item nav-link disabled" href="#">
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
};

export default CounterNavBar;
