import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  public onSubmit() {
    console.log(this.f);
  }
}
