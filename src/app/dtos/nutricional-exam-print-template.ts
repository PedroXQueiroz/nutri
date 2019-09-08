import { Item, PrintTemplate } from './print-template';

abstract class NutricionalItemExamPrintTemplate extends Item{
    
    format(value: string): string {
        
        if(!value){
            return 'Nulo';
        }
        
        return this.innerFormat(value);
    }

    abstract innerFormat(value:string);
}

class NutricionalCentimeterItemExamPrintTemplate extends NutricionalItemExamPrintTemplate
{
    innerFormat(value: string) {
        let numberValue = Number(value);
        if(isNaN(numberValue))
        {
            return value;
        }
        
        return numberValue;
    }
}

export default class NutricionalExamPrintTemplate extends PrintTemplate
{

}
