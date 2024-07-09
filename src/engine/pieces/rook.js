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
}
