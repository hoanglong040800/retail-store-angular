import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from 'shared/components/shared-component.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedComponentModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent],
})
export class AuthModule {}
