import Formula from './formula';
import { param } from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';
import { Gender } from '../constants/gender';

export class Siri extends Formula{
    
    constructor(){
        super('Siri', 'Porcentual de gordura corporal');
    }
    
    @param('Densidade Corporal', ParamType.NUMERAL)
    public corporalDensity:number = 0;

    public calculate(): number {
        const fisrtPart = 4.95 / this.corporalDensity; 
        const secondPart = fisrtPart - 4.5;
        const porcentage = secondPart * 100;

        return porcentage;
    }
    
}