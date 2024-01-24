import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecPasswordPageRoutingModule } from './rec-password-routing.module';

import { RecPasswordPage } from './rec-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecPasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecPasswordPage]
})
export class RecPasswordPageModule {}
