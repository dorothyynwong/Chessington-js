import Piece from './piece';
import Player from '../player';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;

        let possibleMoves = [Square.at(row - 1, col - 1), Square.at(row - 1, col), Square.at(row - 1, col + 1),
            Square.at(row, col - 1), Square.at(row, col + 1),
            Square.at(row + 1, col - 1), Square.at(row + 1, col), Square.at(row + 1, col + 1)];
        const board_size = GameSettings.BOARD_SIZE;

        /*const directions = [
            [1,1],
            [-1,-1],
            [1,-1],
            [-1,1],
            [0, 1],
            [0,-1],
            [1, 0],
            [-1, 0]
        ];

        for(let direction of directions) {
                let dx = direction[0];
                let dy = direction[1];
                moves.push(Square.at(row + dx, col + dy));
        }*/

        let moves = []

        for (let i = 0; i < board_size; i++) {
            if (possibleMoves[i].row < board_size 
                && possibleMoves[i].row >= 0 
                && possibleMoves[i].col < board_size 
                && possibleMoves[i].col >= 0) {
                moves.push(possibleMoves[i])
            }
        }
        return moves;
    }
}
