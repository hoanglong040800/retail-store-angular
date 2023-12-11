import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActionModalComponent } from './action-modal/action-modal.component';

@NgModule({
  imports: [IonicModule],
  declarations: [ActionModalComponent],
  exports: [ActionModalComponent],
})
export class SharedComponentModule {}
