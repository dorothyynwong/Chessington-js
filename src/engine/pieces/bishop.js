import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let moves = [];
        const board_size = GameSettings.BOARD_SIZE;

        for (let i = 1; i <= board_size; i++) {
            if (row + i < board_size && col + i < board_size) moves.push(Square.at(row + i, col + i));
            if (row - i >= 0 && col - i >= 0) moves.push(Square.at(row - i, col - i));
        }

        for (let j = 1; j <= board_size; j++) {
            if (row + j < board_size && col - j >= 0) moves.push(Square.at(row + j, col - j));
            if (row - j >= 0 && col + j < board_size) moves.push(Square.at(row - j, col + j));
        }
        return moves;
    }
}
