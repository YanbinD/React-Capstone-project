import React, { Component } from "react";
import MoviesPanel from "./Components/MoviesPanel";
import CountersPanel from "./Components/CountersPanel"
import "./App.css";




class App extends Component {

  render() {
    return (
      <main className="container">
        <MoviesPanel />
        <CountersPanel />
      </main>
    );
  }
}

// <Movies />
export default App;
