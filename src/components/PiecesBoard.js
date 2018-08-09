import React,{Component} from 'react';
import Legislator from './Legislator';

export default class PiecesBoard extends Component{
    render(){
        console.log("board render");
        return(
            <div>
                <Legislator value={4}/>
                <Legislator value={3}/>
                <Legislator value={2}/>
                <Legislator value={1}/>
                <Legislator value={0}/>
            </div>
        );
    }
}