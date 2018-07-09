import React, { Component } from 'react';
import Pallet from './components/Pallet';
import Legislator from './components/Legislator';
import './style/App.css'

class App extends Component {

  render() {
    return (
        <div id={"main"}>
            {
                // answer place
            }
            <div id={"pieceBox"}>
                <div className={"pieceHolder"} id={"first"}/>
                <div className={"pieceHolder"} id={"second"}/>
                <div className={"pieceHolder"} id={"third"}/>
                <div className={"pieceHolder"} id={"fourth"}/>
            </div>

            {
                // game zone
            }
            <Legislator />
            <Legislator />
            <Legislator />
            <Legislator />
            <Legislator />

            {
                // tools place
            }
            <Pallet/>

        </div>
    );
  }
}

export default App;
