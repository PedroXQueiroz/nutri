import Formula from './formula';
import { param } from '../decorators/param-decorator';
import { ParamType } from '../constants/param-type';
import { Gender } from '../constants/gender';

export class Pollock7Dobras extends Formula{
    
    constructor(){
        super('Pollock 7 Dobras', 'Calcula total de densidade corporal');
    }

    @param('SE', ParamType.NUMERAL)
    public se:number = null;

    @param('Axilar Média', ParamType.NUMERAL)
    public axilarMedia:number = null;

    @param('Triceps', ParamType.NUMERAL)
    public triceps:number = null;

    @param('Coxa', ParamType.NUMERAL)
    public coxa:number = null;

    @param('SI', ParamType.NUMERAL)
    public si:number = null;

    @param('Abdomên', ParamType.NUMERAL)
    public abdomen:number = null;

    @param('Peitoral/Tórax', ParamType.NUMERAL)
    public peitoral:number = null;

    @param('Idade', ParamType.NUMERAL)
    public age:number = null;

    @param('Gênero', ParamType.GENDER)
    public gender:Gender = null;
    
    public calculate(): number {
        let somatorioDobras =   this.se + 
                                this.axilarMedia + 
                                this.triceps + 
                                this.coxa +
                                this.si + 
                                this.abdomen +
                                this.peitoral;

        const const1 = this.gender == Gender.MALE ? 1.112 : 1.097;
        const const2 = this.gender == Gender.MALE ? 0.00043499 : 0.00046971;
        const const3 = this.gender == Gender.MALE ? 0.00000055 : 0.00000056;
        const const4 = this.gender == Gender.MALE ? 0.0002882 : 0.00012828;

        const part1 = const2 * somatorioDobras;
        const part2 = const3 * somatorioDobras ** 2;
        const part3 = const4 * this.age;
        const result = const1 - part1 + part2 - part3;
        
        return result;
        
    }

}