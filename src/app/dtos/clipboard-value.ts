export class ClipboardValue{
    private _name:string

    get name():string{
        return this._name;
    }

    set name(name:string){
        this ._name = name;
    }

    private _value:Number;

    get value():Number{
        return this._value;
    }

    set value(value:Number){
        this._value = value;
    }
}