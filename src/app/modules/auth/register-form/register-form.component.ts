import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
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

  constructor(
    private authService: AuthService,
    private toastCtrl: ToastController,
  ) {}

  get f() {
    return this.registerForm.controls;
  }

  private markAllAsTouched() {
    Object.keys(this.registerForm.controls).forEach((key) => {
      this.registerForm.get(key)?.markAsTouched();
    });
  }

  public async onSubmit(): Promise<void> {
    if (this.registerForm.untouched) {
      this.markAllAsTouched();
    }

    if (this.registerForm.invalid) {
      return;
    }

    try {
      await this.authService.register(this.registerForm.value);

      // if (!result) {
      //   throw new Error(`There's something wrong. Please try again`);
      // }

      this.showToast('Register successfully', 'success');
    } catch (e) {
      this.showToast((e as Error).message, 'error');
    }
  }

  // TODO move to own toastService
  async showToast(message: string, type: 'success' | 'error') {
    type ToastClass = 'toast-success' | 'toast-error';

    const cssClassByType: { [key in typeof type]: ToastClass } = {
      success: 'toast-success',
      error: 'toast-error',
    };

    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      cssClass: cssClassByType[type],
    });

    await toast.present();
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
