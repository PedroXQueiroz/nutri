import { Component, OnInit } from '@angular/core';
import { ClipboardPage } from '../clipboard/clipboard.page';
import { ViewController } from '@ionic/core';
import { NavController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover-paste-value',
  templateUrl: './popover-paste-value.component.html',
  styleUrls: ['./popover-paste-value.component.scss'],
})
export class PopoverPasteValueComponent implements OnInit {

  private _valuesNames:string[]

  get valuesNames():string[]{
    return this._valuesNames;
  }

  selectValueName(name:string){
    
    let value:Number = ClipboardPage.value(name);
    
    this.ctrl.dismiss(value);
  }
  
  constructor(private ctrl: PopoverController) 
  {
    this._valuesNames = ClipboardPage.allValuesKeys;
    console.log(this._valuesNames);
   }

  ngOnInit() {
  }

}
