import React, { Component } from 'react';
import {connect} from 'react-redux';

import Pallet from '../components/Pallet';
import Legislator from '../components/Legislator';

import './style/App.css'


class GameBoard extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeRow: 0,
            row: null,
            column: null,
            crc: [[],[]],
            r: [],
            rs: [[null],[null]]
        };

    }

    // child use parent fields
    // https://ourcodeworld.com/articles/read/409/how-to-update-parent-state-from-child-component-in-react

    renderLeg(i) {
        return <Legislator value={i}/>;
    }


    incertActiveRow(){
        this.setSetate({activeRow: this.state.activeRow+1});
    }

    renderResult(){
        return this.props.results.map((result)=>{
            return(
                <li key={result.title} >
                    {result.title}
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


                <Pallet activeRow={this.state.activeRow} crc={this.state.crc} r={this.state.r} rs={this.state.rs}/>
                <ul >
                    {this.renderResult()}
                </ul>
            </div>
        );
    }
}

function mapStateTOProps(state) {
    return {
        results: state.results
    };
}

export default connect(mapStateTOProps)(GameBoard);
