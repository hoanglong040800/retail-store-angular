import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar';
import { ActionModalComponent } from './action-modal';

@NgModule({
  imports: [IonicModule],
  declarations: [ActionModalComponent, NavbarComponent],
  exports: [ActionModalComponent, NavbarComponent],
})
export class SharedComponentModule {}
