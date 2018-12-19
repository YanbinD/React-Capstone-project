import React, { Component } from "react";



// for stateless component, remove the this. before props 
// and pass props as parameter 
// React will pass the prop object as an argument to this function at runtime 

const CounterNavBar = ({totalCounter}) => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Navbar <span className="badge badge-pill badge-secondary">{totalCounter}</span>
    </a>

  </nav>
   );
}
 
export default CounterNavBar;

