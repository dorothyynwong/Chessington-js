import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let possibleMoves = [Square.at(row - 2, col + 1), Square.at(row - 2 , col-1), Square.at(row - 1, col + 2),
            Square.at(row - 1, col - 2), Square.at(row + 1, col + 2),
            Square.at(row + 1, col - 2), Square.at(row + 2, col + 1), Square.at(row + 2, col - 1)];
        const board_size = GameSettings.BOARD_SIZE;

        let moves = []

        for (let i = 0; i < possibleMoves.length; i++) {
            let piece = board.getPiece(possibleMoves[i]);
            if (piece === undefined) {
                moves.push(possibleMoves[i]);
            }  else {
                if (piece.player !== this.player && !(piece instanceof King))
                    moves.push(possibleMoves[i]);
            }
        }

        return moves;
    }
}
