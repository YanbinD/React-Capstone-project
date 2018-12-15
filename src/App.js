import React, { Component } from "react";
import Movies from "./Components/Movies";
import Counters from "./Components/Counters";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        <Counters />
      </main>
    );
  }
}

export default App;
