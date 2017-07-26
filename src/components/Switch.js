import React, { Component } from 'react';
import './Switch.css';

class Switch extends Component {
  render() {
    return (
      <span className="switch-container">
        <label className="switch">
          <input
            type="checkbox"
            onClick={this.props.onClick}
            defaultChecked={this.props.isChecked}
          />
          <span className="slider round" />
        </label>
        &nbsp;{this.props.label}
      </span>
    );
  }
}

export default Switch;
