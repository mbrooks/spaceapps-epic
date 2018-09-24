import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title" onClick={() => this.props.return('Welcome to Space Apps!')}>
          {this.props.title}
        </h1>
      </header>
    );
  }
}

export default Header;
