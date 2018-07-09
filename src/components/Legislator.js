import React,{Component} from 'react';
import '../style/legislatorStyle.css';

class Legislator extends Component{

    constructor(props){
        super(props);
        this.state={
            value: null,
        };
    }

    render(){
        return(
            <div id={"pieceBox"}>

                <div className={"pieceHolder"} id={"first"}/>
                <div className={"pieceHolder"} id={"second"}/>
                <div className={"pieceHolder"} id={"third"}/>
                <div className={"pieceHolder"} id={"fourth"}/>

                <div id={"result_holder"}>

                </div>
                <button id={"check_btn"}>Check</button>
            </div>
        );
    }
}

export default Legislator;