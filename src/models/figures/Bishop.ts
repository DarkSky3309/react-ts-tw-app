import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-bishop.png"
import whiteLogo from "../../assets/white-bishop.png"

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.BISHOP
    }

    figureAttackAndMove(target:Cell):boolean{
        if (this.cell.isEmptyDiagonal(target))
            return true
        return false;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }
        return this.figureAttackAndMove(target)
    }
}