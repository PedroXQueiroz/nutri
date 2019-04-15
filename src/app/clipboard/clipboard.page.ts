import { Component, OnInit } from '@angular/core';
import { ClipboardValue } from '../dtos/clipboard-value';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  
  
  private static _values:ClipboardValue[] = [];
  
  get values():ClipboardValue[]{
    return ClipboardPage._values;
  }
  
  static addValue(value:ClipboardValue){
    ClipboardPage._values.push(value);
  }
  
  static value(name: string): Number {
    return this._values.find( val => val.name == name).value;
  }

  static get allValuesKeys():string[]{
    
    const valuesNames = ClipboardPage._values.map(val => val.name);
    
    return valuesNames;
  }

  constructor() { }

  ngOnInit() {
  }

}
