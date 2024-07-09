import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let moves = [];

        for (let i=0; i<8; i++) {
            // horizontal moves
            let square = Square.at(row, i);
            let piece = board.getPiece(square);
            if (col !== i) {
                if (piece === undefined) moves.push(square);
                else break;
            } 

            // vertical moves
            square = Square.at(i, col);
            piece = board.getPiece(square);

            if (row !== i) {
                if (piece === undefined) moves.push(square);
                else break;
            } 
        }

        return moves;
    }

  /*  getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let moves = [];

        for (let i=0; i<8; i++) {
            let square = Square.at(row, i);
            let piece = board.getPiece(square);
            if (col !== i) {
                if (piece === undefined) moves.push(square);
                else break;
            } 
        }
        for (let i=0; i<8; i++) {
            let square = Square.at(i, col);
            let piece = board.getPiece(square);
            if (row !== i) {
                if (piece === undefined) moves.push(square);
                else break;
            } 
            
        }
        return moves;
    } */
}


