import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  @Input()
  toggleEvent:EventEmitter;
  
  private _isOpen:boolean;

  get isOpen():boolean{
    return this._isOpen;
  }

  constructor() { }

  ngOnInit() {

    this.toggleEvent.addListener('toggle', () => {
      this.toggle();
    })
  }

  toggle(){
    this._isOpen = !this._isOpen;
  }

}
