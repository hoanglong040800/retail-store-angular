import { RouterModule, Routes } from '@angular/router';
import { TodoPage } from './todo.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TodoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TodoRoutingModule {}
