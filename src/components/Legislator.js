import React,{Component} from 'react';
import '../style/legislatorStyle.css';

class Legislator extends Component{
    render(){
        return(
            <div id={"pieceBox"}>

                <div className={"pieceHolder"} id={this.props.value+"0"}/>
                <div className={"pieceHolder"} id={this.props.value+"1"}/>
                <div className={"pieceHolder"} id={this.props.value+"2"}/>
                <div className={"pieceHolder"} id={this.props.value+"3"}/>

                <div id={"result_holder"}>
                    <div className={"resultHolder"} id={this.props.value+"0R"}></div>
                    <div className={"resultHolder"} id={this.props.value+"1R"}></div>
                    <div className={"resultHolder"} id={this.props.value+"2R"}></div>
                    <div className={"resultHolder"} id={this.props.value+"3R"}></div>
                </div>

            </div>
        );
    }
}

export default Legislator;