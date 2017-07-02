import React, { Component } from 'react';
import logo from './beer.png';
import './App.css';
import consos from './consos.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      price : 0,
      isHappyHour : false
    };
    this.addConso = this.addConso.bind(this);
  }
  toggleHappyHour () {
    let currentValue = this.state.isHappyHour;
    this.setState({isHappyHour : !currentValue});
  }
  addConso (conso) {
    let currentPrice = this.state.price;
    let priceToAdd = this.state.isHappyHour && conso.happyHourPrice ? conso.happyHourPrice : conso.price;
    let newPrice = currentPrice + priceToAdd;
    this.setState({price : newPrice});
  }
  reset(){
    this.setState({price:0});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Celtic-Conso</h2>
        </div>
        <p className="App-intro">
          You must currently pay {this.state.price.toFixed(2)} €
        </p>
        <input onClick ={this.toggleHappyHour.bind(this)} type ="checkbox"/> Happy Hour
        {consos.map((conso)=>{
          return <button key={conso.name} onClick={()=>this.addConso(conso)}>{conso.name}</button>
        })};
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default App;
