import PrintService, { PrintOptions } from './print-service';
import NutricionalExamPrintTemplate from '../dtos/nutricional-exam-print-template';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
import NutricionalItemExamPrintTemplate from '../dtos/nutricional-exam-print-template';
import { Injectable } from '@angular/core';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// import * as fs from 'fs';
@Injectable()
export default class PdfPrintServiceWindows implements PrintService{
    
    
    build(data: NutricionalExamPrintTemplate) {
        throw new Error("Method not implemented.");
    }    
    
    print(content: any, nameFile: string, options:PrintOptions) {
        
        let pdfSource = {
            content: [
                { text: 'Algo' }
            ]
        }

        // let pdf = pdfMake.createPdf(pdfSource);
        // pdf.getBuffer(buffer => {
        //     let blob = new Blob([buffer], { type: 'application/pdf' });

        //     // fs.writeFile("C:/", 'teste.pdf', (err) => {
        //     //     if(err)
        //     //     {
        //     //         console.error(err);
        //     //     }else{
        //     //         console.log('saved')
        //     //     }
        //     // })

        // }); 

    }


}