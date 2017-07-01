import React, { Component } from 'react';
import logo from './beer.png';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      price : 0,
      isHappyHour : false
    };
  }
  toggleHappyHour () {
    let currentValue = this.state.isHappyHour;
    this.setState({isHappyHour : !currentValue})
  }
  addBeer () {
    let beerPrice = this.state.isHappyHour ? 5.50 : 7.40;
    let currentPrice = this.state.price;
    let newPrice = currentPrice + beerPrice;
    this.setState({price : newPrice})
  };
  addCocktail(){
    let currentPrice = this.state.price;
    let newPrice = currentPrice + 8;
    this.setState({price : newPrice})
  }
  addJumboCocktail(){
    let currentPrice = this.state.price;
    let newPrice = currentPrice + 14;
    this.setState({price : newPrice})
  }
  addShot(){
    let currentPrice = this.state.price;
    let newPrice = currentPrice + 4;
    this.setState({price : newPrice})
  }

  addTapas(){
    let currentPrice = this.state.price;
    let newPrice = currentPrice + 7.50;
    this.setState({price : newPrice})
  }
  addFood(){
    let currentPrice = this.state.price;
    let newPrice = currentPrice + 15;
    this.setState({price: newPrice})
  }
  reset(){
    this.setState({price:0})
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
        <button onClick ={this.addBeer.bind(this)}>Beer</button>
        <br/><button onClick={this.addCocktail.bind(this)}>Cocktail</button>
        <br/><button onClick={this.addJumboCocktail.bind(this)}>Jumbo Cocktail</button>
        <br/><button onClick={this.addShot.bind(this)}>Shot</button>
        <br/><button onClick ={this.addTapas.bind(this)}>Tapas</button>
        <br/><button onClick ={this.addFood.bind(this)}>Food</button>
        <br/><button onClick ={this.reset.bind(this)}>Reset</button>

      </div>
    );
  }
}

export default App;
