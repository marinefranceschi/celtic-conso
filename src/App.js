import React, { Component } from "react";
import logo from "./beer.png";
import "./App.css";
import consos from "./consos";
import ConsoButton from "./components/ConsoButton";

let savedPrice = parseFloat(window.localStorage.getItem("Price"));

function savePrice(price) {
  window.localStorage.setItem("Price", price);
}

class App extends Component {
  constructor() {
    super();
    let now = new Date();
    let currentHour = now.getHours();

    this.state = {
      price: savedPrice ? savedPrice : 0,
      isHappyHour: currentHour >= 16 && currentHour < 20,
      displayedList: null
    };
    this.addConso = this.addConso.bind(this);
  }
  toggleHappyHour() {
    let currentValue = this.state.isHappyHour;
    this.setState({ isHappyHour: !currentValue });
  }
  toggleList(consoType) {
    if (this.state.displayedList !== consoType) {
      this.setState({ displayedList: consoType });
    } else {
      this.setState({ displayedList: null });
    }
  }

  addConso(conso) {
    let currentPrice = this.state.price;
    let priceToAdd = getPrice(this.state.isHappyHour, conso);
    let newPrice = currentPrice + priceToAdd;
    this.setState({ price: newPrice, displayedList: null });
    savePrice(newPrice);
  }
  reset() {
    this.setState({ price: 0, displayedList: null });
    savePrice(0);
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
        <input
          onClick={this.toggleHappyHour.bind(this)}
          type="checkbox"
          defaultChecked={this.state.isHappyHour}
        />{" "}
        Happy Hour
        {Object.keys(consos).map(displayConsoList.bind(this))}
        <button className="type" onClick={this.reset.bind(this)}>
          Reset
        </button>
      </div>
    );
  }
}
function displayConsoList(consoType) {
  return (
    <div key={consoType}>
      <button className="type" onClick={() => this.toggleList(consoType)}>
        {consoType}
      </button>
      {this.state.displayedList === consoType &&
        consos[consoType].map(conso =>
          <ConsoButton
            key={conso.name}
            name={conso.name}
            beverage={getPrice(this.state.isHappyHour, conso)}
            onClick={() => this.addConso(conso)}
          />
        )}
    </div>
  );
}

function getPrice(isHappyHour, conso) {
  return isHappyHour && conso.happyHourPrice
    ? conso.happyHourPrice
    : conso.price;
}

export default App;
