import { PrintTemplate } from '../dtos/print-template';

export class PrintOptions{
    public destiny: string;
    public pageSize: string;
}

export default interface PrintService{

    build(data:any):any;
    
    print(content:any, nameFile:string, options:PrintOptions);

}