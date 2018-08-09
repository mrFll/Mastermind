import React,{Component} from 'react';
import {connect} from 'react-redux';
import {setBoardPieceColor} from './../actions';
import Button from '@material-ui/core/Button';
import '../style/palletStyle.css'


/**
 * this is pallet component that contain piece colors in it
 */
class Pallet extends Component{
    checkButton(){
        const activeRow = this.props.activeRow;
        const board = this.props.crc;
        const result = this.props.r;
        const checksum = this.props.rs;

        for(var column= 0; column<4; column++){
            if(board[activeRow][column]=== result[column]){
                checksum[activeRow][column] = 1; // place and color is correct
            }else{
                for(var columnCh = 0; columnCh<4; columnCh++){
                    if(board[activeRow][column] === result[columnCh]){
                        checksum[activeRow][column] = 2; // color is valid
                    }
                }
            }
        }
        // TODO change elements color
        //activeRow++; // change active row to
    }

    render(){
        const {row, column} = this.props;
        return(
            <div>
                <button onClick={()=>this.props.setColor(row,column,1)} className={"circle_button"} id={"purple"}/>

                <button onClick={()=>this.props.setColor(row,column,2)} className={"circle_button"} id={"blue"}/>

                <button onClick={()=>this.props.setColor(row,column,3)} className={"circle_button"} id={"green"}/>

                <button onClick={()=>this.props.setColor(row,column,4)} className={"circle_button"} id={"yellow"}/>

                <button onClick={()=>this.props.setColor(row,column,5)} className={"circle_button"} id={"red"}/>

                <Button variant="extendedFab" color="primary">
                    Check
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    column : state.column,
    row: state.activeRow
});

const mapDispatchToProps = (dispatch) => {
    return {
        setColor : (row, column, colorID) => {
            return dispatch(setBoardPieceColor(row, column, colorID))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pallet);