
export class Orderly{
    
    constructor(order:number){
        this._order = order;
    }
    
    private _order:number;

    get order():number{
        return this._order;
    }
}

export abstract class Item extends Orderly{
    
    constructor(order:number, label:string, value:string){
        super(order);
        this._label = label;
        this._value = value;
    }
    
    private _label: string;

    get label():string{
        return this._label;
    }

    private _value:string;

    get value():string{
        return this.format(this._value);
    }

    abstract format(value:string):string;
}

export class Group extends Orderly{

    constructor(order:number, name:string){
        super(order);

        this._name = name;
        this._itens = new Array();
    }
    
    private _name:string;

    get name():string{
        return this ._name;
    }

    private _itens:Item[];

    get itens():Item[]{
        return this._itens;
    }

    add(item:Item){
        return this._itens.push(item);
    }

    remove(index:number){
        this._itens.splice(index, 1);
    }

}

export class Box extends Orderly{

    constructor(order:number, large:boolean = false){
        super(order);
    }

    private _large:boolean;

    get large():boolean{
        return this._large;
    }

    private _boxes:Box[];

    get boxes():Box[]{
        return this._boxes;
    }

    add(box:Box){
        this._boxes.push(box);
    }

    remove(index:number){
        this._boxes.splice(index, 1);
    }

}

export class PrintTemplate{

    private _boxes:Box[];

    get boxes():Box[]{
        return this._boxes;
    }

    private add(box:Box){
        return this._boxes.push(box);
    }

}