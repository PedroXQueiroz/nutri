// import * as pdf from 'wkhtmltopdf';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import PrintService, { PrintOptions } from './print-service';
import NutricionalItemExamPrintTemplate from '../dtos/nutricional-exam-print-template';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { saveAs } from 'file-saver';

import jspdf from 'jspdf';

@Injectable()
export default class PdfPrintServiceMobile implements PrintService{

    constructor(private _file:File){

    }
    
    public build(){

    }

    public async print(content: any, nameFile:string, options:PrintOptions){

        // let pdfSource = {
        //     content: [
        //         { text: 'Comsposição Corporal' },

        //         { table: 
        //             {                        
                        
        //                 headerRows: 1,
        //                 widths: ['auto', 'auto', 'auto', 'auto'],
        //                 body: [
        //                     ['Avaliado', '','Avalição', ''],
        //                     ['Nome:Shinji Ikari', '','Data:07/01/2016', 'Hora:11:18:07'],
        //                     ['Idade:28', 'Sexo:M', 'Protocolo:Thorland 3 Dobras', '']
        //                 ]
        //             }
        //         }

        //     ]
        // }

        let pdf = new jspdf();
        pdf.fromHTML('<h1>VINDO DE HTML</h1>', 15, 15, {
            width: 170
        });

        let pdfBlob = new Blob([pdf.output('blob')], {type: 'application/pdf'})

        saveAs(pdfBlob, 'veio de html.pdf');

        console.log(pdf);

        // let pdf = pdfMake.createPdf(pdfSource);
        // pdf.getBuffer(buffer => {
        //     let blob = new Blob([buffer], { type: 'application/pdf' });

        //     saveAs(blob, "C:/agora vai.pdf");            
            
        //     // this._file.writeFile(options.destiny, 'teste.pdf', blob, {replace: true});
        // }); 
    }

}