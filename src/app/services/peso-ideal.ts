import Formula from './formula';
import { param } from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';
import { Gender } from '../constants/gender';

export class PesoIdeal extends Formula{
    
    constructor(){
        super('Peso ideal', '');
    }
    
    @param('Massa Magra', ParamType.NUMERAL)
    public massaMagra:number = 0;

    @param('Gênero', ParamType.GENDER)
    public gender:Gender = Gender.MALE;

    public calculate(): number {
        return this.gender == Gender.MALE ?
            this.massaMagra / 0.85:
            this.massaMagra / 0.75;
    }

}