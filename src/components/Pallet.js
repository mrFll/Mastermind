import React,{Component} from 'react';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {setBoardPieceColor} from './../actions';
import Button from '@material-ui/core/Button';
import '../style/palletStyle.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// colors
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";


const styles = {
    purpleButton: {
        margin: 2,
        backgroundColor: purple[500],
    },
    blueButton: {
        margin: 2,
        backgroundColor: blue[500],
    },
    greenButton: {
        margin: 2,
        backgroundColor: green[500],
    },
    yellowButton: {
        margin: 2,
        backgroundColor: yellow[500],
    },
    redButton: {
        margin: 2,
        backgroundColor: red[500],
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
};

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
        const {row, column, classes, setColor} = this.props;
        return(
            <div className={classes.row}>
                <Button variant="fab" className={classes.purpleButton} onClick={()=> setColor(row,column,1)}> </Button>
                <Button variant="fab" className={classes.blueButton} onClick={()=> setColor(row,column,2)}> </Button>
                <Button variant="fab" className={classes.greenButton} onClick={()=> setColor(row,column,3)}> </Button>
                <Button variant="fab" className={classes.yellowButton} onClick={()=> setColor(row,column,4)}> </Button>
                <Button variant="fab" className={classes.redButton} onClick={()=> setColor(row,column,5)}> </Button>

                <Button variant="extendedFab" color="primary">
                    Check
                </Button>
            </div>
        );
    }
}

Pallet.propTypes = {
    classes: PropTypes.object.isRequired,
};

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

//export default connect(mapStateToProps, mapDispatchToProps)(Pallet);

export default compose(
    withStyles(styles, { name: 'Pallet' }),
    connect(mapStateToProps, mapDispatchToProps)
)(Pallet);