import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActionModalComponent } from './action-modal';
import { TextInputComponent } from './input';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  declarations: [ActionModalComponent, TextInputComponent],
  exports: [ActionModalComponent, TextInputComponent],
})
export class SharedComponentModule {}
