import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        const board_size = GameSettings.BOARD_SIZE;

        let moves = [];

        // moves to right
        for (let i=col+1; i<board_size; i++) {
            let square = Square.at(row, i);
            let piece = board.getPiece(square);
            if (piece === undefined) moves.push(square);
            else {
                if (piece.player !== this.player && !(piece instanceof King)) {
                    moves.push(square);
                    break;
                } else break;
            }
        }

        // moves to left
        for (let i=col-1; i>=0; i--) {
            let square = Square.at(row, i);
            let piece = board.getPiece(square);
            if (piece === undefined) moves.push(square);
            else {
                if (piece.player !== this.player && !(piece instanceof King)) {
                    moves.push(square);
                    break;
                } else break;
            }
        }

        // moves up
        for (let i=row+1; i<board_size; i++) {
            let square = Square.at(i, col);
            let piece = board.getPiece(square);
            if (piece === undefined) moves.push(square);
            else {
                if (piece.player !== this.player && !(piece instanceof King)) {
                    moves.push(square);
                    break;
                } else break;
            }
        }

        // moves down
        for (let i=row-1; i>=0; i--) {
            let square = Square.at(i, col);
            let piece = board.getPiece(square);
            if (piece === undefined) moves.push(square);
            else {
                if (piece.player !== this.player && !(piece instanceof King)) {
                    moves.push(square);
                    break;
                } else break;
            }
        }

        

        // diagonal moves
        for (let i = 1; i <= board_size; i++) {
            if (row + i < board_size && col + i < board_size) {
                let square = Square.at(row + i, col + i);
                let piece = board.getPiece(square);
                if (!piece) {
                    moves.push(Square.at(row + i, col + i));
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                        break;
                    } else break;

                };
            }
            if (row - i >= 0 && col - i >= 0) {
                let square = Square.at(row - i, col - i);
                let piece = board.getPiece(square);
                if (!piece) {
                    moves.push(Square.at(row - i, col - i));
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                        break;
                    } else break;

                };
            } 
                
        }

        for (let j = 1; j <= board_size; j++) {
            if (row + j < board_size && col - j >= 0) {
                let square = Square.at(row + j, col - j);
                let piece = board.getPiece(square);
                if (!piece) {
                    moves.push(Square.at(row + j, col - j));
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                        break;
                    } else break;

                };
            } 
            if (row - j >= 0 && col + j < board_size) {
                let square = Square.at(row - j, col + j);
                let piece = board.getPiece(square);
                if (!piece) {
                    moves.push(Square.at(row - j, col + j));
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                        break;
                    } else break;

                };
            }
        }

        return moves

    }
}
