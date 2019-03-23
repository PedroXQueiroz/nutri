import "reflect-metadata";
import { ParamType } from '../constants/param-type';
import ParamaMetaData from '../dtos/param-metadata';

export const paramMetadataKey = Symbol("param");

export function param(name:string, type:ParamType){
    
    let metaData = new ParamaMetaData(name, type);
    
    return Reflect.metadata(paramMetadataKey, metaData);
}