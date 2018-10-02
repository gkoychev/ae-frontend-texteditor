import React, { Component } from 'react';
import './App.css';
import TextFormatter from './containers/TextFormatter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <TextFormatter />
      </div>
    );
  }
}

export default App;
