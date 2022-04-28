import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="title"></div>
        <Pokedex />
      </div>
    );
  }
}

export default App;
