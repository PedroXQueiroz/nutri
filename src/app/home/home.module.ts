import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FormulaViewComponent } from '../formula-view/formula-view.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { ClipboardPage } from '../clipboard/clipboard.page';
import { PopoverPasteValueComponent } from '../popover-paste-value/popover-paste-value.component';

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
    PopoverPasteValueComponent
  ],
  entryComponents: [PopoverPasteValueComponent]
})
export class HomePageModule {}
