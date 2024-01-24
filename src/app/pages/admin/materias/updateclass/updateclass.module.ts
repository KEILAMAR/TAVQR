import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateclassPageRoutingModule } from './updateclass-routing.module';

import { UpdateclassPage } from './updateclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateclassPageRoutingModule
  ],
  declarations: [UpdateclassPage]
})
export class UpdateclassPageModule {}
