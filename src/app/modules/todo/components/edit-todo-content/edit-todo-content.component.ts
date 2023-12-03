import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITodo } from 'shared/interfaces';

@Component({
  selector: 'edit-todo-content',
  templateUrl: './edit-todo-content.component.html',
})
export class EditTodoContentComponent implements OnInit {
  @Input() initForm!: ITodo;

  editTaskForm!: FormGroup;

  ngOnInit() {
    this.editTaskForm = new FormGroup({
      title: new FormControl(this.initForm.title, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      desc: new FormControl(this.initForm.desc, [Validators.maxLength(200)]),
    });
  }

  get f() {
    return this.editTaskForm.controls;
  }

  public onSubmit() {
    console.log('onSubmit');
    console.log(this.f);
  }
}
