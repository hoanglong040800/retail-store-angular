import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface ITodo {
  id: number;
  title: string;
  desc?: string;
}

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
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class TodoPage {
  todoList: ITodo[] = DUMMY_DATA;

  isShowCreateForm = true;

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    desc: new FormControl('', [Validators.maxLength(200)]),
  });

  // shorthand for access input control in html
  get f() {
    return this.taskForm.controls;
  }

  onToggleCreateForm = () => {
    this.isShowCreateForm = !this.isShowCreateForm;
  };

  onSave = () => {
    const genId = this.todoList.length;

    this.todoList.push({
      id: genId,
      title: this.f.title.value || '',
      desc: this.f.desc.value || '',
    });

    this.taskForm.reset();
    this.isShowCreateForm = false;
  };
}
