import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_AUTH_KEY } from 'shared/constant';
import { AuthService, ToastService } from 'shared/services';
import { LoginRes } from 'shared/types';
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
    private cookieSrv: CookieService,
  ) {}

  // publish function so it can be bind in navbar
  public async onSubmit(): Promise<boolean> {
    if (!this.validateFormBeforeSubmit()) {
      return false;
    }

    const tokenObj = await this.handleLogin();

    if (!tokenObj) {
      return false;
    }

    this.handleAfterLogin(tokenObj);

    return true;
  }

  handleAfterLogin(token: LoginRes): void {
    this.cookieSrv.set(COOKIE_AUTH_KEY.accessToken, token.accessToken);
    this.cookieSrv.set(COOKIE_AUTH_KEY.refreshToken, token.refreshToken);
    this.cookieSrv.set(COOKIE_AUTH_KEY.user, JSON.stringify(token.user));
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

  async handleLogin(): Promise<LoginRes> {
    try {
      const tokenObj = await this.authSerivce.login(this.loginForm.value);

      this.toastSrv.present('Login successfully', 'success');
      this.loginForm.reset();

      return tokenObj as LoginRes;
    } catch (e) {
      this.toastSrv.present('Login failed. Please try again', 'error');
      return null;
    }
  }
}
