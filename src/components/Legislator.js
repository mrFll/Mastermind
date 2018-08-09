import React,{Component} from 'react';
import '../style/legislatorStyle.css';
import {connect} from 'react-redux';
import {setColumnID} from './../actions'

class Legislator extends Component{

    getPieceColor(id){
        if(this.props.board[id] == null){
            return 'white';
        }
        switch (this.props.board[id]){
            case 1:
                return 'purple';
            case 2:
                return 'blue';
            case 3:
                return 'green';
            case 4:
                return 'yellow';
            case 5:
                return 'red';
            default:
                return 'white';
        }
    }

    getGuideColor(id){
        if(this.props.board[id] == null){
            return 'white';
        }
        switch (this.props.board[id]){
            case 1:
                return 'black';
            case 2:
                return 'red';
            default:
                return 'white';
        }
    }

    render(){
        console.log(this.props.board);
        const {selectColumn} = this.props;
        return(
            <div id={"pieceBox"}>

                <div className={"pieceHolder"} onClick={() => selectColumn(0)}
                     style={{backgroundColor: this.getPieceColor(0)}}/>

                <div className={"pieceHolder"} onClick={() => selectColumn(1)}
                     style={{backgroundColor: this.getPieceColor(1)}}/>

                <div className={"pieceHolder"} onClick={() => selectColumn(2)}
                     style={{backgroundColor: this.getPieceColor(2)}}/>

                <div className={"pieceHolder"} onClick={() => selectColumn(3)}
                     style={{backgroundColor: this.getPieceColor(3)}}/>

                <div id={"result_holder"}>
                    <div className={"resultHolder"}
                         style={{backgroundColor: this.getGuideColor(0)}}/>
                    <div className={"resultHolder"}
                         style={{backgroundColor: this.getGuideColor(1)}}/>
                    <div className={"resultHolder"}
                         style={{backgroundColor: this.getGuideColor(2)}}/>
                    <div className={"resultHolder"}
                         style={{backgroundColor: this.getGuideColor(3)}}/>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    activeRow: state.activeRow,
    guide: state.guide[ownProps.value],
    board: state.board[ownProps.value]
});


const mapDispatchToProps = (dispatch) => {
    return{
        selectColumn: (id) =>{
            return dispatch(setColumnID(id))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Legislator);