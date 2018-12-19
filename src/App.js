import React, { Component } from "react";
// import Movies from "./Components/Movies";
import CountersPanel from "./Components/CountersPanel"
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <CountersPanel />
      </main>
    );
  }
}

// <Movies />
export default App;
