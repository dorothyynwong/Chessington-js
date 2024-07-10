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
        const directions = [
            [1,0], //North
            [-1,0], //South
            [0,1], //East
            [0,-1], //West
            [1,1], //NE
            [1,-1], //NW
            [-1,1], //SE
            [-1,-1] //SW
        ]

        let moves = [];

        //get moves in direction direction
        const getMovesInDirection = (row_direction, col_direction) => {
            let r = row+row_direction;
            let c = col+col_direction;
            while (r<board_size && c < board_size && r >= 0 && c >= 0)
            {
                let square = Square.at(r, c);
                let piece = board.getPiece(square);
                if (piece === undefined) {
                    moves.push(square);
                } else {
                    if (piece.player !== this.player && !(piece instanceof King)) {
                        moves.push(square);
                    }
                    break;
                }
                r += row_direction;
                c += col_direction;
            }
        }

        directions.forEach(([r,c]) => getMovesInDirection(r,c));

        return moves

    }
}
