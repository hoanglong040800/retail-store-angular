import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from 'shared/components/share-component.module';

@NgModule({
  imports: [CommonModule, IonicModule, SharedComponentModule],
  declarations: [RegisterFormComponent],
  exports: [RegisterFormComponent],
})
export class AuthModule {}
