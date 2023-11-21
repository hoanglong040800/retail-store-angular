import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPage } from './todo.page';
import { TodoRoutingModule } from './todo-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule, TodoRoutingModule],
  declarations: [TodoPage],
})
export class TodoModule {}
