import { Component, OnInit, Input, NgZone } from '@angular/core';
import Formula from '../services/formula';
import { EventEmitter } from 'events';
import ParamaMetaData from '../dtos/param-metadata';
import { ParamType } from '../constants/param-type';
import { ClipboardPage } from '../clipboard/clipboard.page';
import { ClipboardValue } from '../dtos/clipboard-value';
import { PopoverController } from '@ionic/angular';
import { PopoverPasteValueComponent } from '../popover-paste-value/popover-paste-value.component';

@Component({
  selector: 'app-formula-view',
  templateUrl: './formula-view.component.html',
  styleUrls: ['./formula-view.component.scss']
})
export class FormulaViewComponent implements OnInit {

  @Input() formula:Formula;

  private _formulaParams:ParamaMetaData[];

  get formulaParams():ParamaMetaData[]{
    return this._formulaParams;
  }

  public getValueParam(param:ParamaMetaData){
    return this.formula.getParamValue(param);
  }

  private _result:number;

  get result():Number{
    return this._result ? new Number(this._result.toFixed(2)) : null;
  }

  private _toggleEvent:EventEmitter;

  get toggleEvent():EventEmitter{
    return this._toggleEvent;
  }

  private _paramsIsOpen:boolean;

  get paramsIsOpen():boolean{
    return this._paramsIsOpen;
  }
  
  constructor(private _popover: PopoverController, private _ngZone:NgZone) { 
    
  }

  ngOnInit() {
    this._formulaParams = this.formula.paramsData;
    this._toggleEvent = new EventEmitter();
  }
  
  setParamValue(param: ParamaMetaData, value){
    this.formula.setParam(param, value);
  }

  toggleParams(){
    this.toggleEvent.emit('toggle');
    this._paramsIsOpen = !this._paramsIsOpen;
  }

  calculate(){
    this._result = this.formula.calculate();
  }

  sendToClipboard(){
    let value:ClipboardValue = new ClipboardValue();
    value.name = this.formula.name;
    value.value = this.result;

    ClipboardPage.addValue(value);
  }

  async getFromClipboard(param:ParamaMetaData){
    let popover = await this._popover.create({
      component: PopoverPasteValueComponent,
      // event: ev,
      translucent: true
    })
    
    await popover.present();
    
    let dismissResponse = await popover.onDidDismiss();

    this._ngZone.run(() => {
      this.formula.setParam(param, dismissResponse.data);
    })
  }
}
