import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import PdfPrintServiceWindows from './pdf-print-service-windows';
import PdfPrintServiceMobile from './pdf-print-service-mobile';

export function printServiceFactory(platform:Platform, file:File) 
{
    if(platform.is('electron'))
    {
        return new PdfPrintServiceMobile(file);
        
        // return new PdfPrintServiceWindows();
    }else if(platform.is('android')){
        return new PdfPrintServiceMobile(file);
    }
}