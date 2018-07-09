import React, { Component } from 'react';
import Pallet from './components/Pallet';
import './style/App.css'

class App extends Component {
  render() {
    return (
        <div id={"main"}>
            <Pallet/>
        </div>
    );
  }
}

export default App;
