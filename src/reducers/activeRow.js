const activeRow = (state = 0, action) => {

    switch (action.type){
        case 'SET_ACTIVE_ROW':
            return action.rowID;
        default:
            return state;
    }
};

export default activeRow;