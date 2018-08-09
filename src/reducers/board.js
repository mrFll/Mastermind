
const boardDefaultArray = [[null, null, null, null],[null, null, null, null],
    [null, null, null, null],[null, null, null, null],[null, null, null, null]];

const board = (state = boardDefaultArray , action) => {
    switch (action.type){
        /** this action set the board array indexes
         *  happens when user change one of board piece
         *
         *  @param action.row -> number variable that contain piece row
         *
         *  @param action.column -> number variable that contain piece column
         *
         *  @param action.color -> number variable that contain piece color
         *  color ID:
         *      purple: 1
         *      blue:   2
         *      green:  3
         *      yellow: 4
         *      red:    5
         */
        case 'SET_BOARD_PIECE':
            let newState = state;
            console.log("board", state);

            if(action.row > 4 || action.row < 0){
                // check row validation
                throw new Error('boards.js: unknown row: ' + action.row);
            }else if(action.column > 3 || action.column < 0){
                // check column validation
                throw new Error('boards.js: unknown column: ' + action.column);
            }else if(action.color > 6 || action.color < 1){
                // check color validation
                throw new Error('boards.js: unknown color: ' + action.color);
            }else{
                // init board array piece index with the selected color
                newState[action.row][action.column] = action.color;
                return newState;
            }

        default:
            return state;
    }
};

export default board;