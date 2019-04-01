import Formula from './formula';
import ParamMetaData from '../dtos/param-metadata';
import { ParamType } from '../constants/param-type';
import Utils from '../utils';
import { Gender } from '../constants/gender';
import { all } from 'q';

export default class Expression extends Formula {
    
    private _executes: Expression|Formula;
    private _requires: Map<string, Expression|Formula>;
    private _id:string;
    
    constructor(executes:Expression|Formula, requires:Map<string, Expression|Formula> = null, name:string = null, description:string = null){
        super(name, description);

        this._executes = executes;
        this._requires = requires;

        this._id = this.name + '_' +  Utils.createId();
    }

    get hasRequirements():boolean{
        return !!this._requires;
    }

    get startPoints():Array<Expression | Formula>{
        let startPoints = new Array<Expression | Formula>();
        
        if(this.hasRequirements){
            this._requires.forEach(exp => {
                
                if(exp instanceof Expression){
                    startPoints.concat(exp.startPoints);
                    return;
                }
                
                startPoints.push(exp);
            })
        }

        return startPoints;
    }

    get unsatisfiedParams():ParamMetaData[]{

        let unsatifiedParams:ParamMetaData[] = this._executes.getParamsData();
        
        if(this.hasRequirements)
        {
            this._requires.forEach((param, paramName) => {
             
                let paramIndex = unsatifiedParams.findIndex(currentParam => currentParam.name == paramName);
                
                if (paramIndex != -1) {
                    unsatifiedParams = unsatifiedParams.splice(paramIndex, 1);
                }
                
                if(param instanceof Expression) {
                    unsatifiedParams.concat(param.allUnsatifiedParams);
                }else{
                    unsatifiedParams.concat(param.getParamsData());
                }
                
            });
        }

        return unsatifiedParams;

    }
   
    get allUnsatifiedParams():ParamMetaData[]{

        let allParams:ParamMetaData[] = this.unsatisfiedParams;
        
        console.log('this executes params:' + allParams.length);

        if(this.hasRequirements){
            
            this._requires.forEach(requirement => {
                
                if(requirement instanceof Expression){
                    allParams = allParams.concat(requirement.allUnsatifiedParams);
                }else{
                    allParams = allParams.concat(requirement.getParamsData());
                }
            })
        }

        console.log('total params:' + allParams.length);

        return allParams;
    }

    public getParamsData():ParamMetaData[]{
            
        let adjustedParams:ParamMetaData[] = [];
        
        if(this._executes instanceof Expression){
            
            this._executes._requires.forEach((exp) => {

                adjustedParams = adjustedParams.concat(exp.getParamsData());

            })
        
        }else{
            const params = Formula.getParamsDataFrom(this._executes);
    
            adjustedParams = params.map(param => { param.expressionId = this._id; return param });
        }
        return adjustedParams;
    }

    public setParam(param: ParamMetaData, value: number|Gender){

        if(this._id == param.expressionId){
            super.setParam(param, value);
            return;
        }

        if(this.hasRequirements){
            this._requires.forEach((requirement) => {

                if(requirement instanceof Expression){
                    requirement.setParam(param, value);
                }

            })
        }

    }
    
    public calculate(): number {
        
        if(this.hasRequirements){
            for( let paramRequired in this._requires){
                let expRequired:Expression = this._requires[paramRequired];

                let paramValue = expRequired.calculate();

                let param:ParamMetaData = new ParamMetaData(paramRequired, ParamType.NUMERAL);

                this.setParam(param, paramValue);
            }
        }
        
        return this._executes.calculate();
    }
}