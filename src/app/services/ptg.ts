import Formula from './formula';
import { param } from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';

export class PesoTecidoGorduroso extends Formula{
    
    constructor(){
        super('Peso do Tecido Corporal', '');
    }

    @param('Porcentagem de gordura corporal', ParamType.NUMERAL)
    public gorduralCorporal:number = 0;

    public calculate(): number {
        return this.gorduralCorporal * 100;
    }

}