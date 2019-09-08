import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, Platform } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FormulaViewComponent } from '../formula-view/formula-view.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { ClipboardPage } from '../clipboard/clipboard.page';
import { PopoverPasteValueComponent } from '../popover-paste-value/popover-paste-value.component';
import { File } from '@ionic-native/file/ngx';
import { printServiceFactory } from '../services/print-service-factory';
import PrintService, { PrintOptions } from '../services/print-service';
import PdfPrintServiceMobile from '../services/pdf-print-service-mobile';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    FormulaViewComponent,
    AccordionComponent,
    PopoverPasteValueComponent,
    ClipboardPage
  ],
  providers:[,
    Platform,
    File,
    PdfPrintServiceMobile],
  bootstrap:[ClipboardPage],
  entryComponents: [PopoverPasteValueComponent, ClipboardPage]
})
export class HomePageModule {}
