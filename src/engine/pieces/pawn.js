import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);

    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let direction = this.player === Player.WHITE ? 1 : -1;

        let oneStep = Square.at(location.row + direction, location.col);
        let twoStep = Square.at(location.row + (2 * direction), location.col);

        let isOccupiedOne = board.getPiece(oneStep) === undefined ? false : true;
        let isOccupiedTwo = board.getPiece(twoStep) === undefined ? false : true;

        if (this.hasPieceMoved) {
            if (!isOccupiedOne) {
                return [oneStep];
            } else {
                return [];
            }
        } else {
           if (!isOccupiedOne) {
            if (!isOccupiedTwo) return [oneStep, twoStep];
            else return [oneStep];
           } else return [];
        }
    }
}

