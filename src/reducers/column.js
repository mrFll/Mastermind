const column = (state = 0 , action) => {
    switch (action.type){
        case 'SET_COLUMN':
            return action.columnID;
        default:
            return state;
    }
};

export default column;