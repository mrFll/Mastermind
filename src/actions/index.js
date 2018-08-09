/**
 * change the row that user can change it piece colors
 * this show game steps - when it receive to 5, game will finishes
 * @param rowID number of row index between 0 - 4
 * @returns {{type: string, rowID: *}}
 */
export const setActiveRow = (rowID) => ({
    type: 'SET_ACTIVE_ROW',
    rowID
});

/**
 * change board piece color with input column and row
 * @param row number of piece row index between 0 - 4
 * @param column number of piece column index between 0 - 3
 * @param color number of color id
 * @returns {{type: string, row: *, column: *, color: *}}
 */
export const setBoardPieceColor = (row, column,color) => ({
    type: 'SET_BOARD_PIECE',
    row,
    column,
    color
});

/**
 * set column id that want to choose the piece color
 * @param columnID column id between 0 - 3
 * @returns {{type: string, columnID: *}}
 */
export const setColumnID = (columnID) => ({
    type: 'SET_COLUMN',
    columnID
});

/**
 * set little guide pieces for row
 * @param row row number
 * @param guideArray array[4] with 3 state index value (1,2,null)
 * @returns {{type: string, row: *, guideArray: *}}
 */
export const setGuide = (row, guideArray) => ({
    type: 'SET_GUIDE',
    row,
    guideArray
});

/**
 * set result pieces
 * @param colorsArray array[4] that index values contain color id number
 * @returns {{type: string, colorsArray: *}}
 */
export const setResultPieces = (colorsArray) => ({
    type: 'SET_RESULT',
    colorsArray
});


