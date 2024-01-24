import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, ToastService } from 'shared/services';
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

  constructor(
    private toastSrv: ToastService,
    private authSerivce: AuthService,
  ) {}

  // publish function so it can be bind in navbar
  public async onSubmit(): Promise<boolean> {
    if (!this.validateFormBeforeSubmit()) {
      return false;
    }

    return await this.handleLogin();
  }

  validateFormBeforeSubmit() {
    if (this.loginForm.untouched) {
      markTouchedAllInputs(this.loginForm);
    }

    if (this.loginForm.invalid) {
      return false;
    }

    return true;
  }

  async handleLogin(): Promise<boolean> {
    try {
      await this.authSerivce.login(this.loginForm.value);

      this.toastSrv.present('Login successfully', 'success');
      this.loginForm.reset();

      return true;
    } catch (e) {
      this.toastSrv.present('Login failed. Please try again', 'error');
      return false;
    }
  }
}
