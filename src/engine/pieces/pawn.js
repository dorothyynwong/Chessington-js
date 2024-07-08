import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);

    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);

        if (this.player === Player.WHITE) {
            let square = Square.at(location.row + 1, location.col);
            //let isOccupied = board.getPiece(square);
            let isOccupied = true;
            if (board.getPiece(square) === undefined) isOccupied = false;
            console.log("Is Occupied", isOccupied);

            if (!isOccupied) {
                if (this.hasPieceMoved) {
                    return [Square.at(location.row + 1, location.col)] 
                } else {
                    return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
                }
            } else {
                return []
            }
            
        } else {
            if (this.hasPieceMoved) {
                return [Square.at(location.row - 1, location.col)] 
            } else {
                return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
            }
        }
    }
}
