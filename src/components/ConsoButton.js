import React, { Component } from 'react';

class ConsoButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.name} : {this.props.beverage.toFixed(2)} €</button>
    )
  }
};

export default ConsoButton;
