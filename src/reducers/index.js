import {combineReducers} from 'redux';
import activeRow from "./activeRow";
import column from "./column";
import board from "./board";
import result from "./result";
import guide from "./guide";

export default combineReducers({
    activeRow,  // row that user can change it pieces
    column,     // column of the piece that user can change it color
    board,      // all of pieces in the board
    result,     // result of game problem
    guide     // guide little piece in the corner
});