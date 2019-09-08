import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import Formula from '../services/formula';
import FormulaIMC from '../services/formula-imc';
import { Pollock7Dobras } from '../services/pollock-7-dobras';
import { Siri } from '../services/siri';
import { PesoTecidoGorduroso } from '../services/ptg';
import { PesoTecidoMuscular } from '../services/ptm';
import { PesoIdeal } from '../services/peso-ideal';
import { PesoExcesso } from '../services/peso-excesso';
import { MenuController, Platform, NavController } from '@ionic/angular';
import PrintService, { PrintOptions } from '../services/print-service';
import NutricionalExamPrintTemplate from '../dtos/nutricional-exam-print-template';
import PdfPrintServiceMobile from '../services/pdf-print-service-mobile';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private _formulas:Formula[];
  
  get formulas():Formula[]{
    return this._formulas;
  }

  constructor(
    private _menuCtrl:MenuController, 
    private _pdf:PdfPrintServiceMobile,
    private _navCtrl:NavController){
    this._menuCtrl.enable(true, 'clipboard');
  }

  openClipboard(){
    this._menuCtrl.open('clipboard')
  }
  
  ngOnInit(): void {
    this._formulas = new Array();
    this._formulas.push(new FormulaIMC());
    this._formulas.push(new Pollock7Dobras());
    this._formulas.push(new Siri());
    this._formulas.push(new PesoTecidoGorduroso());
    this._formulas.push(new PesoTecidoMuscular());
    this._formulas.push(new PesoIdeal());
    this._formulas.push(new PesoExcesso());
  }

  print(){
    this._navCtrl.navigateForward('/print-page');
  }
  
}
