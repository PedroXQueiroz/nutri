import { ParamType } from '../constants/param-type';

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
}