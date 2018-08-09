import React, { Component } from 'react';

import Pallet from '../components/Pallet';
import Legislator from '../components/Legislator';

import '../style/App.css'


class GameBoard extends Component {

    /*
    constructor(props){
        super(props);
        this.state = {
            activeRow: 0,  number of the row that user can change the piece color and state
            row: null,
            column: null,
            crc: [[],[]],  game board piece array
            r: [], result of the game
            rs: [[null],[null]] checksum
        };

    }
    */
    // child use parent fields
    // https://ourcodeworld.com/articles/read/409/how-to-update-parent-state-from-child-component-in-react

    renderLeg(i) {
        return <Legislator value={i}/>;
    }

    renderResult(){
        return this.props.results.map((result)=>{
            return(
                <li key={result.colorId} >
                    {result.colorId}
                </li>
            );
        });
    }

    render() {
        return (
            <div id={"main"}>

                <div id={"pieceBox"}>
                    <div className={"answerHolder"} id={"0"}/>
                    <div className={"answerHolder"} id={"1"}/>
                    <div className={"answerHolder"} id={"2"}/>
                    <div className={"answerHolder"} id={"3"}/>
                </div>

                {this.renderLeg(0)}
                {this.renderLeg(1)}
                {this.renderLeg(2)}
                {this.renderLeg(3)}
                {this.renderLeg(4)}


                <Pallet />

                {/*
                <ul >
                    {this.renderResult()}
                </ul>
                */}
            </div>
        );
    }
}

export default GameBoard;
