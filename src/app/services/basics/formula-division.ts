import Formula from '../formula';
import { param } from '../../decorators/param-decorator';
import { ParamType } from '../../constants/param-type';

export default class FormulaDivision extends Formula {
    
    constructor(){
        super('Divisão', 'Divide o primeiro pelo segundo número');

        this.numerator = 0;
        this.denominator = 0;
    }
    
    @param("numerador", ParamType.NUMERAL)
    public numerator:number;

    @param("denominador", ParamType.NUMERAL)
    public denominator:number;
    
    public calculate(): number {
        throw this.numerator / this.denominator;
    }
}