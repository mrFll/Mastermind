import React, { Component } from 'react';

import Pallet from './Pallet';
import PieceBoard from './PiecesBoard';

import '../style/App.css'


class GameBoard extends Component {

    render() {
        return (
            <div id={"main"}>

                <div id={"pieceBox"}>
                    <div className={"answerHolder"} id={"0"}/>
                    <div className={"answerHolder"} id={"1"}/>
                    <div className={"answerHolder"} id={"2"}/>
                    <div className={"answerHolder"} id={"3"}/>
                </div>

                <PieceBoard/>

                <Pallet />

            </div>
        );
    }


}

export default GameBoard;
