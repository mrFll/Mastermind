import {combineReducers} from 'redux';
import ResaultReducer from './reducer_result';

const rootReducer = combineReducers({
   resaults: ResaultReducer
});

export default rootReducer;