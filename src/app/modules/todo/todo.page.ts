import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoComponentModule } from './components/todo.component.module';
import { SharedComponentModule } from 'shared/components/share-component.module';
import { ITodo } from 'shared/interfaces';
import { ActionModalComponent } from 'shared/components/action-modal';

const DUMMY_DATA: ITodo[] = [
  {
    id: 1,
    title: 'abc',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem nihil enim non eligendi neque explicabo? Excepturi ab qui illo.',
  },
  {
    id: 2,
    title: 'qwer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, beatae. Delectus iusto voluptate nemo officia ex consequuntur! Quos, quo enim?',
  },
];

@Component({
  selector: 'todo-page',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    TodoComponentModule,
    SharedComponentModule,
  ],
})
export class TodoPage {
  @ViewChild(ActionModalComponent) actionModal!: ActionModalComponent;

  todoList: ITodo[] = DUMMY_DATA;

  isShowCreateForm = false;

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    desc: new FormControl('', [Validators.maxLength(200)]),
  });

  selectedTodo: ITodo = {
    id: 0,
    title: '',
    desc: '',
  };

  // shorthand for access input control in html
  get f() {
    return this.taskForm.controls;
  }

  onToggleCreateForm() {
    this.isShowCreateForm = !this.isShowCreateForm;
  }

  onSave() {
    const genId = this.todoList.length + 1;

    this.todoList.push({
      id: genId,
      title: this.f.title.value || '',
      desc: this.f.desc.value || '',
    });

    this.taskForm.reset();
    this.isShowCreateForm = false;
  }

  onDelete = (needDeleteId: number) => {
    this.todoList = this.todoList.filter((task) => task.id !== needDeleteId);
  };

  onClickEdit(todo: ITodo) {
    this.actionModal.modal.present();
    this.selectedTodo = todo;
  }

  onConfirmEdit(todoInput: ITodo) {
    const editingTodoId = this.todoList.findIndex((t) => t.id === todoInput.id);

    if (editingTodoId === -1) {
      throw new Error('Task not found');
    }

    this.todoList[editingTodoId] = todoInput;
  }
}
