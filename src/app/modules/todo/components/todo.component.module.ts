import { NgModule } from '@angular/core';
import { TodoActionModalComponent } from './todo-action-modal/todo-action-modal.component';
import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from 'shared/components/share-component.module';

@NgModule({
  imports: [IonicModule, SharedComponentModule],
  declarations: [TodoActionModalComponent],
  exports: [TodoActionModalComponent],
})
export class TodoComponentModule {}
