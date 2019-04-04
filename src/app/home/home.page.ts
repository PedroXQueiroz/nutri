import { Component, OnInit } from '@angular/core';
import Formula from '../services/formula';
import FormulaSoma from '../services/formula-soma';
import FormulaIMC from '../services/formula-imc';
import { Pollock7Dobras } from '../services/pollock-7-dobras';
import { Siri } from '../services/siri';
import { PesoTecidoGorduroso } from '../services/ptg';
import { PesoTecidoMuscular } from '../services/ptm';
import { PesoIdeal } from '../services/peso-ideal';
import { PesoExcesso } from '../services/peso-excesso';

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
  
}
