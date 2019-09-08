import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class BoxComponent implements OnInit {

  @Input('data') columns:any[];

  constructor() { }

  ngOnInit() {}

}
