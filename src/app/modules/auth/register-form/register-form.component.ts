import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, ToastService } from 'shared/services';
import { RegisterBody } from 'shared/types';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.max(50)]),
    lastName: new FormControl('', [Validators.required, Validators.max(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  public disabledConfirm = false;

  constructor(
    private authService: AuthService,
    private toastSrv: ToastService,
  ) {}

  get f() {
    return this.registerForm.controls;
  }

  private markAllAsTouched() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      this.registerForm.get(key)?.markAsTouched();
    });
  }

  public async onSubmit(): Promise<boolean> {
    if (this.registerForm.untouched) {
      this.markAllAsTouched();
    }

    if (this.registerForm.invalid) {
      return false;
    }

    try {
      const body: RegisterBody = {
        email: this.f.email.value,
        password: this.f.password.value,
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
      };

      await this.authService.register(body, {
        isLoginAfter: true,
      });

      this.toastSrv.present('Register successfully', 'success');
    } catch (e) {
      this.toastSrv.present((e as Error).message, 'error');
    }

    this.registerForm.reset();
    return true;
  }

  validateConfirmPass() {
    if (this.f.confirmPassword.value === '') {
      return;
    }

    if (this.f.confirmPassword.value === this.f.password.value) {
      this.f.confirmPassword.setErrors(null);
    } else {
      this.f.confirmPassword.setErrors({ mismatch: true });
    }
  }
}
