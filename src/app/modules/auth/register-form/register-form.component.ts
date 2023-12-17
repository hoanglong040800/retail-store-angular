import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'shared/services';

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

  constructor(private authService: AuthService) {}

  get f() {
    return this.registerForm.controls;
  }

  private markAllAsTouched() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      this.registerForm.get(key)?.markAsTouched();
    });
  }

  public async onSubmit() {
    if (this.registerForm.untouched) {
      this.markAllAsTouched();
    }

    if (this.registerForm.invalid) {
      return;
    }

    const result = await this.authService.register(this.registerForm.value);
    // TODO show alert success
    console.log(result);
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
