import { Component, OnInit, Input } from '@angular/core';
import Formula from '../services/formula';
import { EventEmitter } from 'events';
import ParamaMetaData from '../dtos/param-metadata';
import { ParamType } from '../constants/param-type';

@Component({
  selector: 'app-formula-view',
  templateUrl: './formula-view.component.html',
  styleUrls: ['./formula-view.component.scss'],
})
export class FormulaViewComponent implements OnInit {

  @Input() formula:Formula;

  private _formulaParams:ParamaMetaData[];

  get formulaParams():ParamaMetaData[]{
    return this._formulaParams;
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
  
  constructor() { 
    
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
}
