import Formula from './formula';
import {param} from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';
import { Gender } from '../constants/gender';

export default class FormulaIMC extends Formula {
    
    constructor(){
        super('IMC', 'Índice de massa corporal');
    }
    
    @param('peso', ParamType.NUMERAL)
    public weight:number = null;

    @param('altura', ParamType.NUMERAL)
    public height:number = null;

    @param('gênero', ParamType.GENDER)
    public gender:Gender = null;
    
    public calculate(): number {
        return this.weight / (this.height * this.height);
    }
}