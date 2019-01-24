import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import HeaderDiv from './components/headerComp';
import TwitchDiv from './components/twitchComp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App_body">
        <HeaderDiv />
        <TwitchDiv />
      </div>
    );
  }
}

export default App;