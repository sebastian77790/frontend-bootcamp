import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  mapItem(){
    return(
      <li style={{background: item}}>{{item}}</li>
    )
  }
  render() {
    const list = ['red','black']

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul className="Colors">
          <li className="Red">Red</li>
          <li className="Black">Black</li>
          <li className="Brown">Brown</li>
          <li className="Blue">Blue</li>
          <li className="Green">Green</li>
        </ul>
        <ul>
        {list.map(this.item)}
        </ul>
      </div>
    );
  }
}

export default App;
