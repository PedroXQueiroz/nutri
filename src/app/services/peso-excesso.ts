import Formula from './formula';
import { param } from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';

export class PesoExcesso extends Formula{
    
    constructor(){
        super('Peso em Excesso', '');
    }

    @param('Peso Tecido Gorduroso', ParamType.NUMERAL)
    public peso:number = null;
    
    @param('Peso Ideal', ParamType.NUMERAL)
    public pesoIdeal:number = null;
    
    public calculate(): number {
        return this.peso - this.pesoIdeal;
    }

}