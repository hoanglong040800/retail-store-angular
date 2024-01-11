import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from 'shared/components/shared-component.module';
import { EditTodoContentComponent } from './edit-todo-content/edit-todo-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // MUST IMPORT CommonModule in order to use ng directives
    CommonModule,
    IonicModule,
    SharedComponentModule,
    ReactiveFormsModule,
  ],
  declarations: [EditTodoContentComponent],
  exports: [EditTodoContentComponent],
})
export class TodoComponentModule {}
