import Formula from './formula';
import { param } from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';

export default class FormulaSoma extends Formula {
 
    constructor(){
        super('Soma', 'Soma dois números');
    }
    
    @param('primeiro', ParamType.NUMERAL)
    public first:number = null;

    @param('segundo', ParamType.NUMERAL)
    public second:number = null;
    
    calculate(): number {
        let num1 = this.first;
        let num2 = this.second;

        return num1 + num2;
    }

}