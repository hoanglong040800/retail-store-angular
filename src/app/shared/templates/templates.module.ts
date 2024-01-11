import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedComponentModule } from 'shared/components/shared-component.module';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from 'modules/auth/auth.module';

@NgModule({
  imports: [CommonModule, IonicModule, SharedComponentModule, AuthModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class TemplatesModule {}
