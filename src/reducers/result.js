const result = (state = [null,null,null,null], action) => {
    switch (action.type){
        /**
         * result initialize when game starts by computer with random colors
         *
         * @param action.colorsArray -> array with length 4 that contain color id of game result
         * color ID:
         *      purple: 1
         *      blue:   2
         *      green:  3
         *      yellow: 4
         *      red:    5
         */
        case 'SET_RESULT':

            let colorsArr  = action.colorsArray;
            let i;

            // check input size
            if(colorsArr.length !== 4){
                throw new Error('result.js: invalid Array: ' + colorsArr);
            }

            // check input items to between 1 - 5 and not null
            for(i = 0; i< colorsArr.length; i++){
                if(colorsArr[i] == null || colorsArr[i] > 5 || colorsArr[i] < 1){
                    throw new Error('result.js: invalid Array item: '+ colorsArr[i] + 'in' + colorsArr);
                }
            }
            return colorsArr;

        default:
            return state;
    }
};

export default result;