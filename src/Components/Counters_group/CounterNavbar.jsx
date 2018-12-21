import React from "react";

// for stateless component, remove the this. before props
// and pass props as parameter
// React will pass the prop object as an argument to this function at runtime

const CounterNavBar = ({ totalActiveCounter, totalCounter, onReset, onAdd }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">
        Counters{" "} 
        <span className="badge badge-pill badge-secondary">{totalActiveCounter+ "/" + totalCounter}</span>
      </li>
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
          <li onClick={onReset} className={'nav-item nav-link'.concat(totalCounter === 0 ? " disabled" : "")}>
            Reset
          </li>
          <li onClick={onAdd} className="nav-item nav-link">
            Add Counter
          </li>
        </div>
      </div>
    </nav>
  );
};

export default CounterNavBar;
