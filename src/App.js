import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    
    const METHODS = [
      'agregar',
      'quitar'
    ]

    METHODS.forEach((method)=>{
      this[method] = this[method].bind(this)
    })
    this.state = {
      cantidad: 0
    }
  }

  agregar(){
    this.setState({cantidad:this.state.cantidad+1})
  }

  quitar(){
    this.setState({cantidad:this.state.cantidad-1})
  }
  render(){
    return(
      <div className="App">
      <h1>{this.props.name}</h1>
      <p>{this.props.price}</p>
    <div>Cantidad: {this.state.cantidad}</div>
    <button onClick={this.agregar}>Agregar</button>
    <button onClick={this.quitar}>Quintar</button>
    </div>
    )
  }
}

/* function App(props) {
  return (
    <div className="App">
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
} */

export default App;
