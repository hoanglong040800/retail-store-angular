import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ITodo {
  id: number;
  title: string;
  desc: string;
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
  imports: [CommonModule, IonicModule, FormsModule],
})
export class TodoPage {
  constructor() {}

  todoList: ITodo[] = DUMMY_DATA;

  isShowCreateForm = false;

  onToggleCreateForm = () => {
    this.isShowCreateForm = !this.isShowCreateForm;
  };

  onSave = () => {
    alert('onSave');
  };
}
