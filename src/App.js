import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
}

export default App;
