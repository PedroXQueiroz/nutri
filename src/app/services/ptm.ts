import Formula from './formula';
import { ParamType } from '../constants/param-type';
import { param } from '../decorators/param-decorator';

export class PesoTecidoMuscular extends Formula{
    
    constructor(){
        super('Peso Tecido Muscular', 'Total do peso de massa magra');
    }

    @param('Peso tecido gorduroso', ParamType.NUMERAL)
    public pesoTecidoGorduroso:number = null;

    @param('Peso', ParamType.NUMERAL)
    public peso:number = null;
    
    public calculate(): number {
        return this.peso - this.pesoTecidoGorduroso;
    }

}