import { NgModule } from '@angular/core';
import { TodoActionModalComponent } from './todo-action-modal/todo-action-modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [IonicModule],
  declarations: [TodoActionModalComponent],
  exports: [TodoActionModalComponent],
})
export class TodoComponentModule {}
