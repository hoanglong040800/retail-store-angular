import { Component, Input } from '@angular/core';

@Component({
  selector: 'edit-todo-content',
  templateUrl: './edit-todo-content.component.html',
})
export class EditTodoContentComponent {
  @Input() title!: string;
}
