import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ClipboardPage } from '../clipboard/clipboard.page';
import jspdf from 'jspdf';
import { DOCUMENT } from '@angular/common';
import { saveAs } from 'file-saver';
import htmlToImage from 'html-to-image';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.page.html',
  styleUrls: ['./print-page.page.scss'],
})
export class PrintPagePage implements OnInit {

  public registerData:any[];
  
  constructor(@Inject(DOCUMENT) private _document: Document) { }

  getValue(valueName:string):string{
    return ClipboardPage.value(valueName).toString();
  }

  ngOnInit() {
    
    this.registerData = [
      {
        items:[
          {name:'Nome', value:'Aderbaldo'},
          {name:'Idade', value:'28'},
          {name:'Sexo', value:'M'}
        ]
      },
      {
        items:[
          {name:'Data', value:'07/01/2019'},
          {name:'Hora', value:'11:18:07'},
          {name:'Protocolo', value:'Alguma coisa'}
        ]
      }
    ]
    
    setTimeout(() => {
      
      // htmlToImage.toBlob(this._document.querySelector("#report-body"))
      // .then(blob => {
      //   saveAs()
      // })

      let htmlReport = this._document.querySelector("#report-body").innerHTML.replace(new RegExp('box', 'g'), 'div');
  
      let pdf = new jspdf('p', 'pt', 'letter');
      pdf.fromHTML(htmlReport);
      let out = pdf.output('blob');
  
      saveAs( new Blob([out], { type: "text/pdf;charset=utf-8" }),  'vamos ver como fica.pdf')
    
    }, 5000);


  }

}
