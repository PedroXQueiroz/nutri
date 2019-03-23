import Formula from './formula';
import {param} from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';
import { Gender } from '../constants/gender';

export default class FormulaIMC extends Formula {
    
    constructor(){
        super('IMC', 'Índice de massa corporal');

        this.weight = 0;
        this.height = 0;
        this.gender = Gender.MALE;
    }
    
    @param('peso', ParamType.NUMERAL)
    public weight:number;

    @param('altura', ParamType.NUMERAL)
    public height:number;

    @param('gênero', ParamType.GENDER)
    public gender:Gender;
    
    public calculate(): number {
        return this.weight / (this.height * this.height);
    }
}