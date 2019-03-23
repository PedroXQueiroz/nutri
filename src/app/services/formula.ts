import { Gender } from '../constants/gender';
import { paramMetadataKey } from '../decorators/param-decorator';
import ParamMetaData from '../dtos/param-metadata';
import { ParamType } from '../constants/param-type';

export default abstract class Formula{
    
    private _name;
    
    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }
    
    private _description:string;

    get description():string{
        return this._description;
    }

    set description(desc:string){
        this._description = desc;
    }

    constructor(name:string, description:string){
        this._name = name;
        this._description = description;
    }

    public abstract calculate():number;

    get paramsData():ParamMetaData[]{
        let formulaProps:string[] = Object.keys(this);
        let formulaParmas:ParamMetaData[] = formulaProps
            .map(prop =>Reflect.getMetadata(paramMetadataKey, this, prop))
            .filter(param => param);

        return formulaParmas;
    }

    setParam(param:ParamMetaData, value:number|Gender){
        let formulaProps:string[] = Object.keys(this);
        
        formulaProps
            .forEach(prop => {
                let currentParamName:ParamMetaData = Reflect.getMetadata(paramMetadataKey, this, prop);

                console.log(param, value);

                if(currentParamName && currentParamName.name == param.name){
                    this[prop] = param.type == ParamType.GENDER.toString() ? Gender[value] : Number(value);
                    console.log(this[prop]);
                }
            })
    }
};