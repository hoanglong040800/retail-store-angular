import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { markTouchedAllInputs } from 'shared/utils';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  public disabledConfirm: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  // publish function so it can be bind in navbar
  public async onSubmit(): Promise<boolean> {
    if (this.loginForm.untouched) {
      markTouchedAllInputs(this.loginForm);
    }

    if (this.loginForm.invalid) {
      return false;
    }

    return true;
  }
}
