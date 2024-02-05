import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { LoginRes, RegisterBody, RegisterOptions } from 'shared/types';
import { COOKIE_AUTH_KEY } from 'shared/constant';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private ROUTE = '/auth';

  isLoggedIn: boolean = false;

  constructor(
    private api: ApiService,
    private cookieSrv: CookieService,
  ) {
    this.isLoggedIn = !!cookieSrv.get('accessToken');
  }

  async registerApi(body: RegisterBody): Promise<object> {
    return await this.api.post(`${this.ROUTE}/register`, body);
  }

  // TODO define interface later
  async loginApi(input: object): Promise<LoginRes> {
    return await this.api.post(`${this.ROUTE}/login`, input);
  }

  async login(loginData: {
    email: string;
    password: string;
  }): Promise<boolean> {
    if (!loginData) {
      return false;
    }

    const loginRes = await this.loginApi(loginData);
    this.handleAfterLogin(loginRes);

    return true;
  }

  async register(
    body: RegisterBody,
    options: RegisterOptions,
  ): Promise<boolean> {
    if (!body) {
      return false;
    }

    const result = await this.registerApi(body);

    if (!result) {
      throw new Error(`There's something wrong. Please try again`);
    }

    if (options.isLoginAfter) {
      return await this.login({ email: body.email, password: body.password });
    }

    return true;
  }

  logout() {
    this.removeAuthCookies();
    this.isLoggedIn = false;
  }

  removeAuthCookies() {
    for (const authKey in COOKIE_AUTH_KEY) {
      this.cookieSrv.delete(authKey);
    }
  }

  handleAfterLogin(loginRes: LoginRes): void {
    this.cookieSrv.set(COOKIE_AUTH_KEY.accessToken, loginRes.accessToken);
    this.cookieSrv.set(COOKIE_AUTH_KEY.refreshToken, loginRes.refreshToken);
    this.cookieSrv.set(COOKIE_AUTH_KEY.user, JSON.stringify(loginRes.user));
    this.isLoggedIn = true;
  }
}
