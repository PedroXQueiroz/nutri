import { Component, OnInit } from '@angular/core';
import Formula from '../services/formula';
import FormulaSoma from '../services/formula-soma';
import FormulaIMC from '../services/formula-imc';

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
    this._formulas.push(new FormulaSoma());
    this._formulas.push(new FormulaIMC());
  }
  
}
