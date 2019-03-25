import Formula from '../formula';
import { param } from '../../decorators/param-decorator';
import { ParamType } from '../../constants/param-type';

export default class FormulaMultiplication extends Formula {
    
    constructor(){
        super('Multiplicação', 'Multiplica o primeiro pelo segundo');
    }
    
    @param("primeiro", ParamType.NUMERAL)
    public first:number;

    @param("segundo", ParamType.NUMERAL)
    public second:number;
    
    public calculate(): number {
        throw this.first * this.second;
    }
}