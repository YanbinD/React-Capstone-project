import React, { Component } from "react";
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import NavBar from "./Components/navBar"
//swotch will render the first path that matches
import MoviesPanel from "./Components/MoviesPanel";
import CountersPanel from "./Components/CountersPanel"
import "./App.css";


class App extends Component {

  render() {
    return (
      <React.Fragment>
          <NavBar/> 
          <main className="container">

              <Switch>
                <Route path = "/Home" component={Home} />  
                <Route path = "/Movies" component={MoviesPanel}/>
                <Redirect from="/movie" to="/Movies" />
                <Route path = "/Counters" component={CountersPanel} />
                <Redirect from="/counter" to="/Counters" />
                
                <Route path = "/both" render={ () => 
                  <div>
                    <CountersPanel />
                    <MoviesPanel />
                </div>}/>
                <Route path ="/not-found" exact component={NotFound} />
                <Redirect to="/Home" />
              </Switch>
          </main>
      </React.Fragment>

    );
  }
}

const Home = () => {
  return ( 
    <div className="jumbotronMy">
      <h1 className="display-4">Welcome!</h1>
      <p className="lead">This is a simple react demo program</p>
      <hr className="my-3"/>
      <p> Choose one of the routes below </p>
      <Link to="/both"> <button type="button" className="btn btn-outline-primary" >/Both</button> </Link>
      <Link to="/Movies"> <button type="button" className="btn btn-outline-primary" >/Movies</button> </Link>
      <Link to="/Counters"> <button type="button" className="btn btn-outline-primary" >/Counters</button></Link>
      <Link to="/movie"> <button type="button" className="btn btn-outline-primary" >/movie (alias) </button> </Link>
      <Link to="/counter"> <button type="button" className="btn btn-outline-primary" >/counter (alias) </button> </Link>
      <Link to="/asdasdf"> <button type="button" className="btn btn-outline-primary" >/random undefined route </button>  </Link>
      <a className="btn btn-primary btn-sm" href="/both" role="button">Anchor Tag</a>
    </div>
   );
}


const NotFound = () => {
  return (
    <h3> undefined route </h3>
  )
}
 

// <Movies />
export default App;

