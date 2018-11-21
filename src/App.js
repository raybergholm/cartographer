import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import MapView from "./components/MapView";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MapView />
        <Footer />
      </div>
    );
  }
}

export default App;
