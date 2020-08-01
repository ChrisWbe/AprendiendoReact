import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TarjetaFruta.css';


const Compponentes ={
    Titulo:()=>(
      <h1>Titulo</h1>
    ),

    Parrafo:()=>(
      <p>Parrafo</p>
    )
}

class TarjetaFruta extends Component {

  
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="TarjetaFruta">
        <div>Prueba</div>
        <Compponentes.Titulo></Compponentes.Titulo>
      </div>
    )
  }
}
TarjetaFruta.propTypes = {
}

export default TarjetaFruta;

//https://www.npmjs.com/package/cli-react