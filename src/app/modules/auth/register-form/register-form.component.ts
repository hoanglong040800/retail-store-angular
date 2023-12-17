import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  public disabledConfirm = false;

  get f() {
    return this.registerForm.controls;
  }

  private markAllAsTouched() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      this.registerForm.get(key)?.markAsTouched();
    });
  }

  public onSubmit() {
    if (this.registerForm.untouched) {
      this.markAllAsTouched();
    }

    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
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
