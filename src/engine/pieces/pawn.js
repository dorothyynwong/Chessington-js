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

        if (location.row === 0 || location.row === 7) 
            return [];

        let oneStep = Square.at(location.row + direction, location.col);
        let twoStep = Square.at(location.row + (2 * direction), location.col);

        let isOccupiedOne = board.getPiece(oneStep) === undefined ? false : true;
        let isOccupiedTwo = board.getPiece(twoStep) === undefined ? false : true;

        let moves = []

        const canCaptureOpponent = (row, col) => {
            let piece = board.getPiece(Square.at(row, col));
            if (piece !== undefined && piece.player !== this.player) 
                return true;
        }

        if (canCaptureOpponent(location.row+direction, location.col+1))
            moves.push(Square.at(location.row+direction, location.col+1));
        if (canCaptureOpponent(location.row+direction, location.col-1))
            moves.push(Square.at(location.row+direction, location.col-1));

        if (this.hasPieceMoved) {
            if (!isOccupiedOne) moves.push(oneStep); 
        } else {
            if (!isOccupiedOne) {
            if (!isOccupiedTwo) moves.push(oneStep, twoStep);
            else return moves.push(oneStep);
            }
        }
    console.log(moves);
    return moves;
    }
}

