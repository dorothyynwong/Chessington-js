import Piece from './piece';
import Square from '../square';
import King from './king';

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
                else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                        break;
                    } else break;
                }
            } 

            // vertical moves
            square = Square.at(i, col);
            piece = board.getPiece(square);

            if (row !== i) {
                if (piece === undefined) moves.push(square);
                else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                        break;
                    } else break;
                }
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


/*
  0 1 2 3 4 5 6 7
7
6
5
4
3   X R
2
1
0      

*/
