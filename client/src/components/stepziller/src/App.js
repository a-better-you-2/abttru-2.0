import React, { Component } from 'react';

import './App.css';
import "./components/Dropdown.css";
import FullForm from "./components/FullForm";


class App extends Component {

  render() {

    return (
      <div className="App">
        <div>
          <FullForm />
        </div>
      </div>
    );
  }
}

export default App;
