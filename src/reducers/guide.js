const guideDefaultArray = [[null, null, null, null],[null, null, null, null],
    [null, null, null, null],[null, null, null, null],[null, null, null, null]];

const guide = (state = guideDefaultArray , action) => {
    switch (action.type){

        /**
         * set guide for the row
         * this will initialize by checking algorithm
         *
         * @param action.row -> number that show which row
         *                      should initialize with received data
         *
         * @param action.guideArray -> array with 3 state and length 4
         * guide ID:
         *      null:   empty   ->  piece is not red and black
         *      1:      black   ->  piece have same color with it
         *                          Corresponding column  result Piece
         *      2:      red     ->  piece have same color with one of result pieces
         */
        case 'SET_GUIDE':

            let guideArr = action.guideArray;
            let row = action.row;
            let newState = state;
            let i;

            // check input size
            if(guideArr.length !== 4){
                throw new Error('guide.js: invalid Array: ' + guideArr);
            }

            // check input items to be 1 or 2 or null
            for(i = 0; i< guideArr.length; i++){
                if(guideArr[i] > 2 || guideArr[i] < 1){
                    throw new Error('guide.js: invalid Array item: '+ guideArr[i] +
                                        'in' + guideArr);
                }
            }

            // TODO check that this initialization is correct or not
            // initialize changes so state
            for(i = 0; i<4; i++){
                newState[row][i] = guideArr[i];
            }
            return newState;

        default:
            return state;
    }
};

export default guide;