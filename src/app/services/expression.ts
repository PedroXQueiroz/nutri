import Formula from './formula';
import ParamMetaData from '../dtos/param-metadata';
import { ParamType } from '../constants/param-type';
import Utils from '../utils';
import { Gender } from '../constants/gender';

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

        let params:ParamMetaData[] = this._executes.getParamsData();
        
        if(this.hasRequirements){

            for(let paramName in this._requires){
                let paramIndex = params.findIndex(currentParam => currentParam.name == paramName);               

                if(paramIndex != -1){
                    params = params.splice(paramIndex, 1);
                }
            }

        }

        return params;

    }
    
    get allUnsatifiedParams():ParamMetaData[]{

        let allParams:ParamMetaData[] = this.unsatisfiedParams;

        if(this.hasRequirements){
            this._requires.forEach(requirement => {
                if(requirement instanceof Expression){
                    allParams.concat(requirement.allUnsatifiedParams);
                }
            })
        }

        return allParams;

    }

    public getParamsData():ParamMetaData[]{
        const params = super.getParamsData();

        let adjustedParams:ParamMetaData[] = params.map(param => { param.expressionId = this._id; return param });

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