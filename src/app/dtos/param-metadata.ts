import { ParamType } from '../constants/param-type';
import { Gender } from '../constants/gender';

export default class ParamaMetaData{
    
    constructor(name:string, type:ParamType){
        this._name = name;
        this._type = type;
    }
    
    private _name:string;

    get name():string{
        return this._name;
    }

    private _type:ParamType;

    get type():ParamType{
        return this._type;
    }

    private _value:number|Gender;

    get value():number|Gender{
        return this._value;
    }

    set value(value: number|Gender){
        this._value = value;
    }

    private _expressionId:string;

    get expressionId():string{
        return this._expressionId;
    }

    set expressionId(id:string){
        this._expressionId = id;
    }
}