import Formula from '../formula';
import { param } from '../../decorators/param-decorator';
import { ParamType } from '../../constants/param-type';

export default class FormulaSoma extends Formula {
 
    constructor(){
        super('Soma', 'Soma dois números');

        this.first = 0;
        this.second = 0;
    }
    
    @param('primeiro', ParamType.NUMERAL)
    public first:number;

    @param('segundo', ParamType.NUMERAL)
    public second:number;
    
    calculate(): number {
        return this.first + this.second;
    }

}