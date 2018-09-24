import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import EpicView from './EpicView';

class App extends Component {
  showAlert(value) {
    alert(value);
  }

  render() {
    return (
      <div className="App">
        <Header title="EPIC Imaging" return={value => this.showAlert(value)} />
        <EpicView />
      </div>
    );
  }
}

export default App;
