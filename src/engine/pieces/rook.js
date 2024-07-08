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

   /*     for(let i=0; i<8; i++) {
            moves.push(Square.at(row, col+i));
            moves.push(Square.at(row+i, col));
        }
        
        let locationToRemove = location

        let legalMoves = moves.filter(item => item.row !== locationToRemove.row || item.col !== locationToRemove.col);

        return legalMoves;*/

        /*      Square.at(1, 0), Square.at(1, 1), Square.at(1, 3), Square.at(1, 4), Square.at(1, 5), Square.at(1, 6), Square.at(1, 7),
            // Vertical
            Square.at(0, 2), Square.at(2, 2), Square.at(3, 2), Square.at(4, 2), Square.at(5, 2), Square.at(6, 2), Square.at(7, 2)*/

            for(let i=0; i<8; i++) {
                if (col !== i) moves.push(Square.at(row, i));
            }
            for (let i=0; i<8; i++) {
                if (row !== i) moves.push(Square.at(i, col));
            }

            return moves;
    }
}
