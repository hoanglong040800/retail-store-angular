import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from 'shared/components/share-component.module';
import { EditTodoContentComponent } from './edit-todo-content/edit-todo-content.component';

@NgModule({
  imports: [IonicModule, SharedComponentModule],
  declarations: [EditTodoContentComponent],
  exports: [EditTodoContentComponent],
})
export class TodoComponentModule {}
