import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from 'shared/components/shared-component.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent, RegisterFormComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedComponentModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterFormComponent, LoginFormComponent],
  exports: [RegisterFormComponent, LoginFormComponent],
})
export class AuthModule {}
