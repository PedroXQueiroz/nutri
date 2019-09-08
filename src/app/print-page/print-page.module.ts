import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrintPagePage } from './print-page.page';
import { BoxComponent } from '../box/box.component';

const routes: Routes = [
  {
    path: '',
    component: PrintPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrintPagePage, BoxComponent]
})
export class PrintPagePageModule {}
