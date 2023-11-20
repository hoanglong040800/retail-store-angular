import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPage } from './todo.page';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  imports: [CommonModule, TodoRoutingModule],
  declarations: [TodoPage],
})
export class TodoModule {}
