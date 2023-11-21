import { Component } from '@angular/core';

interface ITodo {
  id: number;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.scss'],
})
export class TodoPage {
  todoList: ITodo[] = [
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
}
